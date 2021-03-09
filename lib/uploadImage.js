import { toPng } from 'html-to-image'

const apiUrl = 'https://api.getup.org.au/upload-url'

const options = id => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    campaign: 'nsfuw',
    filename: `${id}.png`,
  })
})

const imageOpts = {
  pixelRatio: 1,
}

export default async function uploadImage(shareImageId, id) {
  const element = prepareElement(shareImageId)
  const dataUrl = await toPng(element, imageOpts)
  element.remove()
  const body = await (await fetch(dataUrl)).blob()
  const { url } = await (await fetch(apiUrl, options(id))).json()
  await fetch(url, { method: 'PUT', body })
  return id
}

function prepareElement(id) {
  const clone = document.getElementById(id).cloneNode(true)
  clone.style.width = '600px'
  clone.style.height = '314px'
  clone.style.padding = '10px'
  const story = clone.children[1]
  if (story.textContent.length < 100) story.style.fontSize = '3em'
  clone.id = `${id}-clone`
  document.body.appendChild(clone)
  return clone
}
