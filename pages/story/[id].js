import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Homepage from '@components/Homepage'
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

const src = id => `https://uploads.getup.org.au/nsfuw/${id}.png`

export default function Story({ id, _serviceCode, story }) {

  return (
    <div className="container">
      <Head id={id} />

      <main>
        <Header title="Story page!" />

        <h3>Story page for {id}!</h3>

        <img src={src(id)} alt={story} />

        <p>
          {story}
        </p>

        <hr className="divider" />

        <Homepage />
      </main>


      <Footer />
    </div>
  )
}
