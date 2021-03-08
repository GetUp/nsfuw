import Logo from '../components/Logo'

export default function Header({ title }) {
  return (
    <header className="bg-primary-500 flex flex-col items-center py-12 px-4 border-b-8 border-secondary-500">
      {/* <h1 className="text-4xl text-center py-12">{title}</h1> */}
      <div className="max-w-3xl mb-4">
        <Logo />
      </div>
      <h2 className="font-heading tracking-normal text-2xl md:text-4xl font-bold opacity-50 tracking-tight">
        Dob in your job agency
      </h2>
    </header>
  )
}
