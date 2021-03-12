import Head from '@components/Head'
import Header from '@components/Header'
import ActionPane from '@components/ActionPane'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

export default function Home() {
  return (
    <div className="bg-primary-500">
      <Head />
      <Nav />

      <main>
        <Header />
        <div className="flex flex-col justify-center items-center max-w-screen-xl w-full mx-auto text-white text-lg md:text-xl py-12 px-4">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="absolute w-full h-full inset-0"
            ></iframe>
          </div>
        </div>
        <ActionPane />
      </main>

      <Footer />
    </div>
  )
}
