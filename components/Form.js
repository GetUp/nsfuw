import { useState } from 'react'
import StoryImage from '@components/StoryImage'
import uploadImage from 'lib/uploadImage'
import persistStory from 'lib/persistStory'
import Loading from './Loading'

const shareImageId = "share-image"
const services = [
  { code: "JA", name: "Jobactive" },
  { code: "PN", name: "ParentsNext" },
  { code: "DES", name: "Disability Employment Services" },
]

export default function Form() {
  const [serviceCode, setServiceCode] = useState('JA')
  const [story, setStory] = useState('Your story here')
  const [submissionResult, setSubmissionResult] = useState([null, '']) // success bool, message
  const [loading, setLoading] = useState(false)

  const onChange = setter => event => setter(event.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setSubmissionResult([null, ''])
    try {
      const id = await uploadImage(shareImageId)
      await persistStory({ id, serviceCode, story })
      setSubmissionResult([true, ''])
    } catch (error) {
      console.error(error)
      setSubmissionResult([false, JSON.stringify(error.message)])
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {services.map(({ code, name }) => (
          <label key={code} className="service-option">
            <input
              type="radio"
              name="service"
              value={code}
              checked={code === serviceCode}
              onChange={onChange(setServiceCode)}
            />
            {name}
          </label>
        ))}
      </div>

      <StoryImage {...{ shareImageId, serviceCode, story }} />

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
        {submissionResult[0] === true && (
          <div className="success">
            Successfully uploaded!
          </div>
        )}

        {submissionResult[0] === false && (
          <div className="error">
            {submissionResult[1]}
          </div>
        )}

        {loading
          ? <Loading />
          : <input type="submit" value="Share" />
        }
      </div>
    </form>
  )
}
