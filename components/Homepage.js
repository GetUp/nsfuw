import Link from 'next/link'
import Header from '@components/Header'
import Form from '@components/Form'

export default function Homepage() {
  return (<>
    <Header title="Not Safe For Unemployed Workers" />
    <h3>Dob in your job agency – expose their cruelty</h3>

    <div>
      Fill this form if you’re unemployed or have a story to share
    </div>

    <Link href={`/stories`}>
      <a>Share these other stories if you’re not</a>
    </Link>

    <Form />
  </>)
}
