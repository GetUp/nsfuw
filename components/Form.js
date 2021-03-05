import { useState } from 'react'

const services = [
  "Jobactive",
  "ParentsNext",
  "Disability Employment Services",
]

export default function Form() {
  const [service, setService] = useState('Jobactive')
  const [story, setStory] = useState('Your story here')

  const onChange = setter => event => setter(event.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    // const [shareUrl, imageUrl] = uploadImage()
    const options = {
      method: 'POST',
      body: JSON.stringify({ service, story })
    }
    const response = await fetch(`/.netlify/functions/form-submission`, options)
    const body = await response.json()
    console.log(JSON.stringify(body))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {services.map(s => (
          <label key={s} className="serviceOption">
            <input
              type="radio"
              name="service"
              value={s}
              checked={s === service}
              onChange={onChange(setService)}
            />
            {s}
          </label>
        ))}
      </div>

      <div>
        <label>
          Your Story
            <br />
          <textarea
            id="story"
            name="story"
            rows="5"
            cols="33"
            // placeholder="My story"
            value={story}
            onChange={onChange(setStory)}
          />
        </label>
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}
