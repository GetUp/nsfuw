import Link from 'next/link'
import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getStories } from '../lib/airtable'

export async function getServerSideProps(_context) {
  const stories = await getStories()

  return {
    props: {
      stories,
    },
  }
}

export default function Stories({ stories }) {

  return (
    <div className="container">
      <Head title="Not Safe For Unemployed Workers" />

      <main>
        <Header title="Story page!" />

        <h3>Stories</h3>

        <Link href={`/`}>
          <a>Go home</a>
        </Link>

        {stories.map(({ ID }) => (
          <div key={ID}>
            <Link href={`/story/${ID}`}>
              <a>{ID}</a>
            </Link>
          </div>
        ))}

      </main>

      <Footer />
    </div>
  )
}
