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
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiClipboard } from '@react-icons/all-files/fi/FiClipboard'
import { event } from 'lib/gTag'

export const hashtags = ['80ADAY', 'BTPM', 'NSFUW']
export default function Share({ id, preview = true, className = '' }) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState('')
  const message = 'Not Safe For Unemployed Workers.'

  useEffect(() => {
    setUrl(`https://${location.host}/story/${id}`)
  }, [])

  const [quote, title, body] = [message, message, message]
  const hashtag = `#${hashtags[0]}`
  const round = false
  const size = 42
  const borderRadius = 5
  const btnClassNames = 'flex items-center space-x-2 text-sm hover:underline'
  const whatsappWindow = { windowWidth: 624, windowHeight: 590 }
  const openShareDialogOnClick = true // force new window for email
  const onClick = (e) => event({ category: 'share', action: e.target.innerText })
  const onCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 4000)
  }

  const Buttons = () => (
    <div className={`space-y-2 ${className}`}>
      <div>
        <FacebookShareButton {...{ url, quote, hashtag, onClick, className: btnClassNames }}>
          <FacebookIcon {...{ size, borderRadius, round }} />
          <span className="text-base">Share on Facebook</span>
        </FacebookShareButton>
      </div>
      <div>
        <TwitterShareButton {...{ url, title, hashtags, onClick, className: btnClassNames }}>
          <TwitterIcon {...{ size, borderRadius, round }} />
          <span className="text-base">Share on Twitter</span>
        </TwitterShareButton>
      </div>
      <div>
        <WhatsappShareButton {...{ url, title, onClick, className: btnClassNames, ...whatsappWindow }}>
          <WhatsappIcon {...{ size, borderRadius, round }} />
          <span className="text-base">Share via WhatsApp</span>
        </WhatsappShareButton>
      </div>
      <div>
        <EmailShareButton {...{ url, body, openShareDialogOnClick, onClick, className: btnClassNames }}>
          <EmailIcon {...{ size, borderRadius, round }} />
          <span className="text-base">Share via Email</span>
        </EmailShareButton>
      </div>
      <div>
        <CopyToClipboard text={url} {...{ onCopy }}>
          <button className={btnClassNames}>
            <FiClipboard className="h-6 w-6 ml-1" style={{ width: size, height: size }} />
            <span className="text-base">Copy to clipboard</span>
          </button>
        </CopyToClipboard>
        {'  '}
        {copied ? <span style={{ color: 'red' }}>[copied]</span> : null}
      </div>
    </div>
  )

  return (
    <>
      {preview ? (
        <div
          className="col-span-2 md:grid md:gap-8 lg:gap-16 w-full text-gray-900"
          style={{ gridTemplateColumns: '1fr 300px' }}
        >
          <img src={`https://uploads.getup.org.au/nsfuw/${id}.png`} className="mb-12 w-full" />
          <Buttons />
        </div>
      ) : (
        <Buttons />
      )}
    </>
  )
}
