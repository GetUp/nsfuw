import { toPng } from 'html-to-image'

const apiUrl = 'https://api.getup.org.au/upload-url'

const options = id => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    project: 'nsfuw',
    filename: `${id}.png`,
    type: 'image/png',
  })
})

const imageOpts = {
  pixelRatio: 1,
}

export default async function uploadImage(shareImageId, id) {
  const dataUrl = await toPng(document.getElementById(shareImageId), imageOpts)
  const body = await (await fetch(dataUrl)).blob()
  const { url } = await (await fetch(apiUrl, options(id))).json()
  await fetch(url, { method: 'PUT', body })
  return id
}
