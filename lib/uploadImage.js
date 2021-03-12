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

export default async function uploadImage(shareImageId, id) {
  const element = prepareElement(shareImageId)
  const svgDataUrl = await toSvgDataURL(element, imageOpts)
  // const svgDataUrl = await toJpeg(element, imageOpts)
  element.remove()
  const pngDataUrl = await makePngDataUrl(svgDataUrl)
  // const body = await (await fetch(svgDataUrl)).blob()
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

async function makePngDataUrl(svgDataUrl) {
  let pngDataUrl
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 314
  const ctx = canvas.getContext('2d')
  const logo = document.createElement('img')
  logo.setAttribute('src', '/DES.png')
  console.log('promise 1')
  await new Promise((res, rej) => logo.onload = res)
  console.log('after promise 1')
  const img = document.createElement('img')
  img.setAttribute('src', svgDataUrl)
  // img.onload = 
  await new Promise((resolve, reject) => {
    console.log('promise 2')
    img.onload = function () {
      console.log('onload')
      ctx.drawImage(img, 0, 0)
      ctx.drawImage(logo, 0, 0)
      // ctx.setTransform(1, 0, 0, 1, 0, 0)
      pngDataUrl = canvas.toDataURL('image/png')
      resolve()
    }
    img.onerror = reject
  })
  console.log('pngDataUrl')
  return pngDataUrl
}
