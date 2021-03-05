import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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

        <Link href={`/`}>
          <a>Go home</a>
        </Link>

        <Link href={`/stories`}>
          <a>Stories</a>
        </Link>

      </main>


      <Footer />
    </div>
  )
}
