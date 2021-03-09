import Link from 'next/link'
import Logo from '../components/Logo'

export default function Header({ title }) {
  return (
    <header className="bg-primary-500 flex flex-col items-center py-12 px-4 border-b-8 border-secondary-500">
      {/* <h1 className="text-4xl text-center py-12">{title}</h1> */}
      <Link href="/">
        <a>
          <div className="max-w-3xl mb-4">
            <Logo />
          </div>
        </a>
      </Link>
      <h2 className="font-heading text-2xl md:text-4xl font-bold opacity-50">Dob in your job agency</h2>
    </header>
  )
}
