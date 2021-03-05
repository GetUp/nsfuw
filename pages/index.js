import Link from 'next/link'
import Head from '@components/Head'
import Header from '@components/Header'
import Form from '@components/Form'
import Footer from '@components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head title="Not Safe For Unemployed Workers" />

      <main>
        <Header title="Not Safe For Unemployed Workers" />
        <h3>Dob in your job agency – expose their cruelty</h3>


        <div>
          Fill this form if you’re unemployed or have a story to share
        </div>

        <Link href={`/stories`}>
          <a>Share these other stories if you’re not</a>
        </Link>

        <Form />
      </main>

      <Footer />
    </div>
  )
}
