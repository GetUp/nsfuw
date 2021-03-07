import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Homepage from '@components/Homepage'
import StoryImage from '@components/StoryImage'
import getStory from '../../lib/getStory'

export async function getServerSideProps({ params: { id } }) {
  const { serviceCode, story } = await getStory(id)

  return {
    props: {
      id,
      serviceCode,
      story,
    },
  }
}

export default function Story({ id, serviceCode, story }) {
  return (
    <div className="container">
      <Head id={id} />

      <main>
        <Header title="Story page!" />

        <StoryImage {...{ serviceCode, story }} />

        <hr className="divider" />

        <Homepage />
      </main>


      <Footer />
    </div>
  )
}
