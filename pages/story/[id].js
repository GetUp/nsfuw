import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Homepage from '@components/Homepage'
import StoryImage from '@components/StoryImage'
import Nav from '@components/Nav'
import getStory from 'lib/getStory'
import Share from '@components/Share'

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
      <Nav />

      <main className="bg-primary-500">
        <Header size="small" />

        <StoryImage {...{ serviceCode, story, id }} />

        <Homepage />
      </main>

      <Footer />
    </>
  )
}
