import Link from 'next/link'
import Head from '@components/Head'
import Header from '@components/Header'
import StoryDisplay from '@components/StoryDisplay'
import Footer from '@components/Footer'
import getStories from '../lib/getStories'

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
      <Head />

      <main>
        <Header title="Story page!" />

        <h3>Stories</h3>

        <Link href={`/`}>
          <a>Go home</a>
        </Link>

        {stories.map(story =>
          <StoryDisplay {...story} key={story.id} />
        )}

      </main>

      <Footer />
    </div>
  )
}
