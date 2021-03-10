import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-400 py-12">
        <footer className="flex flex-col justify-start max-w-screen-xl w-full mx-auto px-4 ">
          <ul className="mr-auto mb-4 space-y-2">
            <li>
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/stories">
                <a className="hover:underline">Stories</a>
              </Link>
            </li>
          </ul>
          <div className="text-sm opacity-50 space-y-2">
            <p>
              Our team acknowledges that we meet and work on the land of the Gadigal people of the Eora Nation. We wish
              to pay respect to their Elders — past, present and future — and acknowledge the important role all
              Aboriginal and Torres Strait Islander people continue to play within Australia and the GetUp community.
            </p>
            <p>
              WARNING: Aboriginal and Torres Strait Islander people are warned that this website may contain images or
              names of deceased persons.
            </p>
            <p>© 2021 GetUp! All rights reserved. Authorised by Paul Oosting, GetUp, Sydney.</p>
          </div>
        </footer>
      </footer>
    </>
  )
}
