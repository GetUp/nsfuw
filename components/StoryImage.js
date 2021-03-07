export default function StoryImage({ shareImageId = "not-the-share-image", serviceCode, story }) {
  return (<>
    <div id={shareImageId} className="share-image-container">
      <div className="logo-container">
        <img src={`/${serviceCode}-header.png`} className="logo" />
      </div>

      <div className="story-display">
        {story}
      </div>

      <div className="hash-tags">
        #80ADAY #BTPM #NSFUW
      </div>
    </div>

    <style jsx>{`
      .share-image-container {
        background-image: url('/background.jpg');
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .logo-container {
        display: flex;
        justify-content: center;
      }
      .logo {
        width: 60%;
      }
      .story-display {
        font-size: 1.4em;
        text-align: center;
      }
      .hash-tags {
        font-weight: bold;
        color: #E06971;
      }
    `}</style>

  </>)
}
