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

export default function Form({ step, setStep, setId }) {
  const [serviceCode, setServiceCode] = useState('JA')
  const [story, setStory] = useState('Your story here')
  const [submissionResult, setSubmissionResult] = useState([null, '']) // success bool, message
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setSubmissionResult([null, ''])
    try {
      const response = await persistStory({ serviceCode, story })
      const id = response.id.substring(3)
      await uploadImage(shareImageId, id)
      setId(id)
      setSubmissionResult([true, ''])
      setTimeout(() => setStep(3), 1000)
    } catch (error) {
      console.error(error)
      setSubmissionResult([false, JSON.stringify(error.message)])
    } finally {
      setLoading(false)
    }
  }

  return (<>
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          {services.map(({ code, name }) => (
            <img
              key={code}
              src={`/${code}.png`}
              alt={`${name} logo`}
              className="service-logo"
              onClick={() => {
                setServiceCode(code)
                setStep(2)
              }}
            />
          ))}
        </div>
      )}

      {step === 2 && (<>
        <input type="button" value="Back" onClick={() => setStep(1)} />

        <StoryImage {...{ shareImageId, serviceCode, story }} />

        <div className="story-container">
          <label>
            Your Story
              <br />
            <textarea
              className="story"
              name="story"
              rows="5"
              cols="33"
              // placeholder="My story"
              value={story}
              onChange={e => setStory(e.target.value)}
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
      </>)}
    </form>

    <style jsx>{`
      .service-logo {
        display: block;
        width: 100%;
        padding: 10px 0;
        cursor: pointer;
      }
      
      .success {
        background-color: lightgreen;
      }
      
      .error {
        background-color: lightpink;
      }
    `}</style>

  </>)
}
