export default function StoryImage({ shareImageId, serviceCode, story }) {
  return (
    <div id={shareImageId}>
      <div className="logo-container">
        my
        <img src={`/${serviceCode}.png`} className="serviceLogo" />
        story
      </div>

      {story}

      <div className="hash-tags">
        #80ADAY #BTPM #NSFUW
      </div>
    </div>
  )
}
