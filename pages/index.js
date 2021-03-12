import Head from '@components/Head'
import Header from '@components/Header'
import ActionPane from '@components/ActionPane'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Home() {
  return (
    <div className="bg-primary-500">
      <Head />
      <Nav />

      <main>
        <Header />
        <ActionPane />
      </main>

      <Footer />
    </div>
  )
}
