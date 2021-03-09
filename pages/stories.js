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
    <div className="bg-primary-500">
      <Head />

      <main>
        <Header title="Story page!" />

        {/* <Link href={`/`}>
          <a>Go home</a>
        </Link> */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-8 px-4">
          <div className="col-span-full space-y-4 mb-8">
            <h3 className="font-heading text-5xl md:text-6xl col-span-full text-secondary-500">Stories</h3>
            <p className="text-lg md:text-2xl text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan et urna eget venenatis. Etiam
              consequat pretium aliquet. In hac habitasse platea dictumst.{' '}
            </p>
          </div>
          {stories.map((story) => (
            <StoryDisplay {...story} key={story.id} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
