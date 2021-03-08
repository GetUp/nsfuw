import Head from '@components/Head'
import Homepage from '@components/Homepage'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Head />

      <main>
        <Homepage />
      </main>

      <Footer />
    </div>
  )
}
