import Head from '@components/Head'
import Header from '@components/Header'
import Homepage from '@components/Homepage'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Home() {
  return (
    <div className="bg-primary-500">
      <Head />
      <Nav />

      <main>
        <Header />
        <Homepage />
      </main>

      <Footer />
    </div>
  )
}
