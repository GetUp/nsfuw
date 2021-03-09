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
    <>
      <Head id={id} />

      <main className="bg-gray-800">
        <Header size="small" />

        <StoryImage {...{ serviceCode, story }} />

        <Homepage />
      </main>

      <Footer />
    </>
  )
}
