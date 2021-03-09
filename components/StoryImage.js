export default function StoryImage({ shareImageId = 'not-the-share-image', serviceCode, story }) {
  return (
    <>
      {shareImageId === 'not-the-share-image' ? (
        <>
          <div className="bg-gray-900">
            <div className="max-w-screen-xl mx-auto py-16 px-4 ">
              <div id={shareImageId} className="bg-secondary-500 rounded-sm border border-gray-700">
                <div className="flex justify-between items-center bg-gray-800 p-4 h-full text-white">
                  <div className="text-xl font-medium">My Jobactive story</div>
                  <img
                    src={`/${serviceCode}.png`}
                    className="w-1/3 object-contain"
                    style={{ filter: 'brightness(200)', maxWidth: '150px' }}
                  />
                </div>

                <div className="text-white  text-2xl p-4">{story}</div>

                <div className="p-4 text-gray-900 font-bold tracking-tight">#80ADAY #BTPM #NSFUW</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div id={shareImageId} className="share-image-container">
          <div className="logo-container">
            <img src={`/${serviceCode}-header.png`} className="logo" />
          </div>
          <div className="story-display">{story}</div>
          <div className="hash-tags">#80ADAY #BTPM #NSFUW</div>
        </div>
      )}
    </>
  )
}
