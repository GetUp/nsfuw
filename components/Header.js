import Link from 'next/link'
import Logo from '../components/Logo'

export default function Header({ size }) {
  return (
    <>
      {size !== 'small' ? (
        <header className="bg-gray-800 flex flex-col items-center py-12 px-4 border-b-2 border-secondary-500">
          <Link href="/">
            <a>
              <div className="max-w-3xl mb-4">
                <Logo style={{ maxWidth: '96vw', width: '100%' }} />
              </div>
            </a>
          </Link>
          <h2 className="font-heading text-2xl md:text-4xl font-bold opacity-50 text-white">Dob in your job agency</h2>
        </header>
      ) : (
        <header className="bg-gray-800 flex flex-col items-center py-4 px-4">
          <Link href="/">
            <a>
              <div className="max-w-sm mb-4">
                <Logo style={{ maxWidth: '96vw', width: '100%' }} />
              </div>
            </a>
          </Link>
          {/* <h2 className="font-heading text-2xl md:text-2xl font-bold opacity-50">Dob in your job agency</h2> */}
        </header>
      )}
    </>
  )
}
