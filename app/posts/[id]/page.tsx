import { allPosts } from 'contentlayer/generated'
import { compileMDX } from 'next-mdx-remote/rsc'
import { readFile } from 'node:fs/promises'
import { useMDXComponent } from 'next-contentlayer/hooks'
import path from 'path'
import dayjs from 'dayjs'
async function getMDXContent(name) {
  try {
    const filePath = path.join(process.cwd(), '/posts/', `${name}.mdx`)
    const contents = await readFile(filePath, { encoding: 'utf8' })
    return await compileMDX({
      source: contents,
      options: { parseFrontmatter: true }
    })
  } catch (error) {
    console.log('error: 获取mdx文档内容', error)
    return null
  }
}

// export default async function Home({ params }) {
//   const res = await getMDXContent(params.id)
//   console.log('res', res)
//   if (!res) return <h1>Page not Found!</h1>
//   const { content, frontmatter } = res
//   return <>{content}</>
// }

export default function Page({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.id)
  // console.log('post', post)
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <>
      <div className='mb-8 text-center'>
        <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
          {dayjs(post.date).format('DD/MM/YYYY')}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      <MDXContent />
    </>
  )
}
