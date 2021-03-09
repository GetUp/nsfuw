import Link from 'next/link'

export default function StoryDisplay({ id, serviceCode, story }) {
  return (
    <div className="flex flex-col justify-between bg-gray-700 p-4 rounded-sm border border-gray-600 text-white">
      {story}
      <Link href={`/story/${id.substring(3)}`}>
        <a className="mt-4 bg-gray-600 text-white w-max py-1 px-3 rounded-sm">Share</a>
      </Link>
    </div>
  )
}
