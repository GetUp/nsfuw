import { nameFromCode } from 'lib/services'

const StoryHeader = ({ serviceCode }) => {
  const name = nameFromCode(serviceCode)
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 h-16 text-white">
      <div className="text-xl font-medium">My {name} story</div>
      <img
        src={`/${serviceCode}.png`}
        alt={`${name} logo`}
        className="w-1/3 object-contain"
        style={{ maxWidth: '150px' }}
      />
    </div>
  )
}

export default function StoryImage({ shareImageId = 'not-the-share-image', serviceCode, story }) {
  return (
    <>
      {shareImageId === 'not-the-share-image' ? (
        <div className="bg-gray-900">
          <div className="max-w-screen-xl mx-auto py-16 px-4 ">
            <div id={shareImageId} className="bg-secondary-500 rounded-sm border border-gray-700">
              <StoryHeader {...{ serviceCode }} />

              <div className="text-white text-2xl p-4">{story}</div>

              <div className="p-4 text-gray-900 font-bold tracking-tight">#80ADAY #BTPM #NSFUW</div>
            </div>
          </div>
        </div>
      ) : (
        <div id={shareImageId}>
          <div className="bg-secondary-500 h-full">
            <StoryHeader {...{ serviceCode }} />
            <div className="h-full">
              <div className="p-4 text-white" id="story">
                {story}
              </div>
              <div className="p-4 text-gray-900 font-bold tracking-tight text-base">#80ADAY #BTPM #NSFUW</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
