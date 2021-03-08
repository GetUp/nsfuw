import Link from 'next/link'

export default function StoryDisplay({ id, serviceCode, story }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {story}
      <Link href={`/story/${id.substring(3)}`}>
        <a>Share</a>
      </Link>
    </div>
  )
}
