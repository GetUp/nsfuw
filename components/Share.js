import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share'

export default function Share({ step, setStep, id }) {
  const url = `https://${location.host}/story/${id}`
  const message = 'Not Safe For Unemployed Workers.'
  const hashtags = ['#80ADAY', '#BTPM', '#NSFUW']

  const [quote, title, body] = [message, message, message]
  const hashtag = hashtags[0]
  const round = false
  const size = 42
  const borderRadius = 5
  const className = 'share-icon'
  const whatsappWindow = { windowWidth: 624, windowHeight: 590 }

  return (<>
    <img src={`https://uploads.getup.org.au/nsfuw/${id}.png`} />

    <div>
      <FacebookShareButton {...{ url, quote, hashtag, className }}>
        <FacebookIcon {...{ size, borderRadius, round }} />
        Share on Facebook
      </FacebookShareButton>
    </div>
    <div>
      <TwitterShareButton {...{ url, title, hashtags, className }}>
        <TwitterIcon {...{ size, borderRadius, round }} />
        Share on Twitter
      </TwitterShareButton>
    </div>
    <div>
      <WhatsappShareButton {...{ url, title, className, ...whatsappWindow }}>
        <WhatsappIcon {...{ size, borderRadius, round }} />
        Share via WhatsApp
      </WhatsappShareButton>
    </div>
    <div>
      <EmailShareButton {...{ url, body, openShareDialogOnClick: true, className }}>
        <EmailIcon {...{ size, borderRadius, round }} />
        Share via Email
      </EmailShareButton>
    </div>

  </>)
}
