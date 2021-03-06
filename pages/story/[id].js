import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Homepage from '@components/Homepage'

export async function getServerSideProps({ params: props }) {
  return {
    props,
  }
}

export default function Story({ id }) {

  return (
    <div className="container">
      <Head title={id} />

      <main>
        <Header title="Story page!" />

        <h3>Story page for {id}!</h3>

        <img src={`https://uploads.getup.org.au/nsfuw/${id}.png`} />

        <hr className="divider" />

        <Homepage />
      </main>


      <Footer />
    </div>
  )
}
