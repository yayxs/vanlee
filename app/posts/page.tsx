import Link from '../components/base/Link'
import dayjs from 'dayjs'
import { allPosts } from 'contentlayer/generated'

function PostCard(post) {
  return (
    <>
      <div className='mb-8'>
        <h2 className='mb-1 text-xl'>
          <Link
            href={post.url}
            className='text-blue-700 hover:text-blue-900 dark:text-blue-400'
          >
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
          {dayjs(post.date).format('YYYY-MM-DD')}
        </time>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <div className='mx-auto max-w-xl py-8'>
        {allPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  )
}
