import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const title = params.id

  return {
    props: { title },
    revalidate: false,
  }
}

export default function Story(props) {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <main>
        <p>Page loading...</p>
      </main>
    )
  }

  const { title } = props
  return (
    <div className="container">
      <Head title={title} />

      <main>
        <Header title="Story page!" />

        <h3>Story page!</h3>

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
