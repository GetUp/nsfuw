import { nameFromCode } from 'lib/services'
import { hashtags } from './Share'
import Share from '@components/Share'


const hashes = hashtags.map((t) => `#${t}`).join(' ')

const StoryHeader = ({ serviceCode, isPreview }) => {
  const name = nameFromCode(serviceCode)
  return (
    <div className="flex items-center bg-gray-800 p-4 h-16 text-white">
      <div className="text-xl font-medium">My {name} story</div>
      <img
        src={`/${serviceCode}.png`}
        alt={`${name} logo`}
        className="w-full object-contain ml-auto"
        style={{ maxWidth: '150px', height: '29px' }}
      />
    </div>
  )
}

export default function StoryImage({ shareImageId = 'not-the-share-image', serviceCode, story, id }) {
  return (
    <>
      {shareImageId === 'not-the-share-image' ? (
        <div className="bg-gray-900">
          <div className="max-w-screen-xl mx-auto py-16 px-4 ">
            <div className="md:grid md:gap-8 lg:gap-16" style={{gridTemplateColumns: '1fr 300px'}}>
              <div id={shareImageId} className="bg-secondary-500 rounded-sm border border-gray-700">
                <StoryHeader {...{ serviceCode }} />
                <div className="text-white text-2xl p-4">{story}</div>
                <div className="p-4 text-gray-900 font-bold tracking-tight">{hashes}</div>
              </div>
              <Share id={id} preview={false} className="text-white mt-4 md:mt-0"/>
            </div>

          </div>
        </div>
      ) : (
        <div id={shareImageId}>
          <div className="bg-secondary-500 h-full">
            <StoryHeader {...{ serviceCode }} />
            <div style={{ height: 'calc(100% - 64px' }}>
              <div className="p-4 text-white">{story}</div>
              <div className="p-4 text-gray-900 font-bold tracking-tight text-base">{hashes}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
