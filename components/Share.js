import React, { useEffect, useState } from 'react'
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
  const [url, setUrl] = useState('')
  const message = 'Not Safe For Unemployed Workers.'
  const hashtags = ['#80ADAY', '#BTPM', '#NSFUW']

  useEffect(() => {
    setUrl(`https://${location.host}/story/${id}`)
  }, [])

  const [quote, title, body] = [message, message, message]
  const hashtag = hashtags[0]
  const round = false
  const size = 42
  const borderRadius = 5
  const className = 'flex items-center space-x-2 text-sm hover:underline'
  const whatsappWindow = { windowWidth: 624, windowHeight: 590 }
  const openShareDialogOnClick = true // force new window for email
  const onClick = () => {} // prevent parent window also opening email

  return (
    <>
      <img src={`https://uploads.getup.org.au/nsfuw/${id}.png`} className="mb-12" />
      <div className="space-y-2">
        <div>
          <FacebookShareButton {...{ url, quote, hashtag, className }}>
            <FacebookIcon {...{ size, borderRadius, round }} />
            <span className="text-base">Share on Facebook</span>
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton {...{ url, title, hashtags, className }}>
            <TwitterIcon {...{ size, borderRadius, round }} />
            <span className="text-base">Share on Twitter</span>
          </TwitterShareButton>
        </div>
        <div>
          <WhatsappShareButton {...{ url, title, className, ...whatsappWindow }}>
            <WhatsappIcon {...{ size, borderRadius, round }} />
            <span className="text-base">Share via WhatsApp</span>
          </WhatsappShareButton>
        </div>
        <div>
          <EmailShareButton {...{ url, body, openShareDialogOnClick, onClick, className }}>
            <EmailIcon {...{ size, borderRadius, round }} />
            <span className="text-base">Share via Email</span>
          </EmailShareButton>
        </div>
      </div>
    </>
  )
}
