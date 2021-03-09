import Link from 'next/link'
import Header from '@components/Header'
import ActionPane from '@components/ActionPane'

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-screen-xl w-full mx-auto text-white text-lg md:text-xl py-12 px-4">
        <ActionPane />
      </div>
    </>
  )
}
