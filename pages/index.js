import Head from '@components/Head'
import Header from '@components/Header'
import Homepage from '@components/Homepage'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="bg-primary-500">
      <Head />

      <main>
        <Header />
        <Homepage />
      </main>

      <Footer />
    </div>
  )
}
