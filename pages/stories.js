import Link from 'next/link'
import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Stories() {

  return (
    <div className="container">
      <Head title="Not Safe For Unemployed Workers" />

      <main>
        <Header title="Story page!" />

        <h3>Stories</h3>

        <Link href={`/`}>
          <a>Go home</a>
        </Link>

        <Link href={`/story/123`}>
          <a>Story 123</a>
        </Link>

      </main>

      <Footer />
    </div>
  )
}
