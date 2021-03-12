import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import StoryImage from '@components/StoryImage'
import CharsRemaining from '@components/CharsRemaining'
import Loading from '@components/Loading'
import uploadImage from 'lib/uploadImage'
import persistStory from 'lib/persistStory'
import { services } from 'lib/services'
import { event } from 'lib/gTag'
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight'
import { FiArrowUpRight } from '@react-icons/all-files/fi/FiArrowUpRight'
import { FiArrowLeftCircle } from '@react-icons/all-files/fi/FiArrowLeftCircle'

const maxStoryLength = 280
const shareImageId = 'share-image'

export default function Form({ step, setStep, setId }) {
  const [serviceCode, setServiceCode] = useState('JA')
  const [story, setStory] = useState('')
  const [submissionResult, setSubmissionResult] = useState([null, '']) // success bool, message
  const [loading, setLoading] = useState(false)
  const $story = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (story.length > maxStoryLength) {
      return setSubmissionResult([false, `Please limit your story to ${maxStoryLength} characters.`])
    }
    setLoading(true)
    setSubmissionResult([null, ''])
    try {
      const response = await persistStory({ serviceCode, story })
      const id = response.id.substring(3)
      await uploadImage(shareImageId, id, serviceCode)
      setId(id)
      setSubmissionResult([true, ''])
      event({ category: 'action', action: 'share-story' })
      setTimeout(() => setStep(3), 1000)
    } catch (error) {
      console.error(error)
      setSubmissionResult([false, `An unknown error has occurred; please try again.`])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    step === 2 && $story.current.focus()
  }, [step])

  return (
    <>
      <form onSubmit={handleSubmit} className="px-4 py-4 border border-primary-500 bg-gray-800 rounded text-white">
        {step === 1 && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-full mb-6">
                <h2 className="font-heading text-4xl">Share your story</h2>
                <p className="mt-2 opacity-70">Fill this form if you’re unemployed or have a story to share</p>
              </div>
              {services.map(({ code, name }) => (
                <div
                  key={code}
                  onClick={() => setServiceCode(code)}
                  className={`p-4 bg-primary-700 h-32 transition border border-transparent rounded-sm flex items-center bg-gray-700
                    ${
                      code === serviceCode ? 'bg-secondary-500' : 'hover:bg-gray-600 hover:border-gray-500'
                    } cursor-pointer
                  `}
                >
                  <img src={`/${code}.png`} alt={`${name} logo`} className="service-logo" />
                </div>
              ))}
            </div>
            <button className="btn bg-secondary-500 mt-8 flex items-center" onClick={() => setStep(2)}>
              Next <FiArrowRight className="h-6 w-6 ml-1" />
            </button>

            <hr className="opacity-20 my-8" />

            <Link href={`/stories`}>
              <a className="block text-base underline mb-4 opacity-60 hover:no-underline hover:opacity-100">
                Support others by sharing their stories
              </a>
            </Link>
          </div>
        )}

        {step === 2 && (
          <>
            <button
              value="Back"
              className="bg-transparent mb-2 opacity-50 flex text-base hover:opacity-100"
              onClick={() => setStep(1)}
            >
              <FiArrowLeftCircle className="h-6 w-6 mr-1" /> Back
            </button>
            <div className="space-y-2 mb-8">
              <div className="flex items-end justify-between">
                <label htmlFor="story" className="block text-sm font-medium">
                  Your Story
                </label>
                <div>
                  <CharsRemaining current={story.length} max={maxStoryLength} />
                </div>
              </div>
              <textarea
                id="story"
                className="text-gray-800 p-2 w-full rounded-sm"
                rows="5"
                cols="33"
                placeholder="Your story here"
                ref={$story}
                onChange={(e) => {
                  setStory(e.target.value)
                  if (e.target.value?.length <= maxStoryLength) setSubmissionResult([null, ''])
                }}
              />
            </div>
            <p className="block text-sm font-medium">Preview</p>
            <div className="border border-gray-500 mt-2">
              <StoryImage {...{ shareImageId, serviceCode, story }} />
            </div>

            <div className="mt-2">
              {submissionResult[0] === true && (
                <div className="py-1 px-2 text-sm bg-green-200 rounded-sm text-green-800 border border-green-500">
                  Successfully uploaded!
                </div>
              )}

              {submissionResult[0] === false && (
                <div className="py-1 px-2 text-sm bg-red-200 rounded-sm text-red-800 border border-red-500">
                  {submissionResult[1]}
                </div>
              )}

              {loading ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  className="btn bg-secondary-500 mt-8 flex items-center disabled:bg-gray-700"
                  disabled={story.length <= 3}
                >
                  Share <FiArrowUpRight className="h-6 w-6 ml-0.5" />
                </button>
              )}
            </div>
          </>
        )}
      </form>

      <style jsx>{`
        .service-logo {
          display: block;
          width: 100%;
          padding: 10px 0;
        }

        .success {
          background-color: lightgreen;
        }

        .error {
          background-color: lightpink;
        }
      `}</style>
    </>
  )
}
