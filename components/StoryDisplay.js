import Link from 'next/link'

export default function StoryDisplay({ id, serviceCode, story }) {
  return (
    <div className="flex flex-col justify-between bg-primary-400 p-4 rounded-sm border  text-gray-900">
      {story}
      <Link href={`/story/${id.substring(3)}`}>
        <a className="mt-4 bg-gray-200 text-gray-800 w-max py-1 px-3 rounded-sm">Share</a>
      </Link>
    </div>
  )
}
