import { Mdx } from 'app/components/MdxComp'
import { allPages } from 'contentlayer/generated'

interface PageProps {
  params: {
    slug: string
  }
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)
  if (!page) {
    return null
  }
  return page
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)
  return (
    <article className='py-6 prose dark:prose-invert'>
      <h1>{page.title}</h1>
      {page.description && <p className='text-xl'>{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  )
}
