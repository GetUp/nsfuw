import Head from 'next/head'

export default function CustomHead({ id }) {
  const domain = 'https://nsfuw.netlify.app'
  const title = 'Not Safe For Unemployed Workers'
  const desc = 'Dob in your job agency – expose their cruelty'

  const pageUrl = id ? `${domain}/story/${id}` : domain
  const imageUrl = id ? `https://uploads.getup.org.au/nsfuw/${id}.png` : 'https://cdn.getup.org.au/image_21457_full.png'
  const imageAlt = id ? 'Story about a job agency; full text on page' : desc

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:description" content={desc} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
  )
}
