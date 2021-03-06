import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gTag'
import * as fbq from '../lib/fpixel'
import '../styles.css'

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      fbq.pageview()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}
