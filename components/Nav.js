import Link from 'next/link'

const Nav = () => (
  <nav className="bg-gray-800">
    <div className="flex justify-between max-w-screen-xl w-full mx-auto px-4 py-4">
      <Link href="/">
        <a>
          <div className="h-6 w-6 bg-secondary-500"></div>
        </a>
      </Link>
      <Link href="/stories">
        <a className="text-gray-200 hover:underline">Stories</a>
      </Link>
    </div>
  </nav>
)

export default Nav
