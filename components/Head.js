import Head from 'next/head'

export default function CustomHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:description" content="Site description" />
      <meta property="og:site_name" content="Not Safe For Unemployed Workers" />
      <meta name="monetization" content="$ilp.uphold.com/rEgHHBQGDUDP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Site description." />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image" content="https://example.com/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
  )
}
