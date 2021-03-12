import Link from 'next/link'

const Nav = () => (
  <nav className="bg-gray-800">
    <div className="flex justify-between max-w-screen-xl w-full mx-auto px-4 py-4">
      <Link href="/">
        <a>
          <div className="h-6 w-6 bg-secondary-500"></div>
        </a>
      </Link>
      <div className="space-x-4 font-medium text-secondary-500">
        <Link href="/video">
          <a className="text-secondary-500 hover:underline">Watch the video</a>
        </Link>
        <Link href="/stories">
          <a className="btn bg-secondary-500 hover:underline">All stories</a>
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav
