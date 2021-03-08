import Link from 'next/link'
import Header from '@components/Header'
import ActionPane from '@components/ActionPane'

export default function Homepage() {
  return (
    <>
      <Header title="Not Safe For Unemployed Workers" />

      <div className="flex flex-col justify-center items-center max-w-screen-xl w-full mx-auto text-white text-lg md:text-xl py-12 px-4">
        <ActionPane />
        <h3>Dob in your job agency – expose their cruelty</h3>

        <div>Fill this form if you’re unemployed or have a story to share</div>

        <Link href={`/stories`}>
          <a>Share these other stories if you’re not</a>
        </Link>
      </div>
    </>
  )
}
