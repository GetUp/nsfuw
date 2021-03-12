import { toPng, toSvgDataURL, toJpeg } from 'html-to-image'

const apiUrl = 'https://api.getup.org.au/upload-url'

const options = (id) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    campaign: 'nsfuw',
    filename: `${id}.png`,
  }),
})

const imageOpts = {
  pixelRatio: 1,
}

export default async function uploadImage(shareImageId, id, serviceCode) {
  const element = prepareElement(shareImageId)
  const svgDataUrl = await toSvgDataURL(element, imageOpts)
  element.remove()

  console.log(shareImageId, id, serviceCode)
  const pngDataUrl = await makePngDataUrl(svgDataUrl, serviceCode)
  const body = await (await fetch(pngDataUrl)).blob()
  const { url } = await (await fetch(apiUrl, options(id))).json()
  await fetch(url, { method: 'PUT', body })
  return id
}

function prepareElement(id) {
  const clone = document.getElementById(id).cloneNode(true)
  clone.getElementsByTagName('img')[0].remove()
  clone.style.width = '600px'
  clone.style.height = '314px'

  const story = clone.children[0].children[1].children[0]
  story.style.fontSize = getFontSize(story.textContent.length)

  clone.id = `${id}-clone`
  document.body.appendChild(clone)
  return clone
}

function getFontSize(length) {
  if (length < 50) {
    return '2.5em'
  } else if (length < 100) {
    return '2em'
  } else if (length < 150) {
    return '1.65em'
  } else if (length < 200) {
    return '1.5em'
  } else {
    return '1.3em'
  }
}

async function makePngDataUrl(svgDataUrl, serviceCode) {
  let pngDataUrl
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 314
  const ctx = canvas.getContext('2d')

  const logo = document.createElement('img')
  logo.setAttribute('src', `/${serviceCode}.png`)
  await new Promise((res, rej) => (logo.onload = res))

  const img = document.createElement('img')
  img.setAttribute('src', svgDataUrl)

  await new Promise((resolve, reject) => {
    img.onload = function () {
      const logoRatio = logo.height / logo.width
      const logoHeight = 36
      const logoWidth = logoHeight / logoRatio
      const padding = 16
      const barHeight = 64

      const logoX = canvas.width - logoWidth - padding
      const logoY = (barHeight - logoHeight) / 2

      ctx.drawImage(img, 0, 0)
      ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight)

      pngDataUrl = canvas.toDataURL('image/png')
      resolve()
    }
    img.onerror = reject
  })
  console.log('pngDataUrl')
  return pngDataUrl
}
