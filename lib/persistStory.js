const fnUrl = `/.netlify/functions/form-submission`

const options = (fields) => ({
  method: 'POST',
  body: JSON.stringify(fields)
})

export default async function persistStory(fields) {
  const response = await fetch(fnUrl, options(fields))
  return response.json()
}
