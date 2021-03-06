import Head from '@components/Head'
import Homepage from '@components/Homepage'
import Footer from '@components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head title="Not Safe For Unemployed Workers" />

      <main>
        <Homepage />
      </main>

      <Footer />
    </div>
  )
}
