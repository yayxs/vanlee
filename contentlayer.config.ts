import {
  defineDocumentType,
  makeSource,
  ComputedFields
} from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  }
}

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },
  computedFields
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    date: {
      type: 'date',
      required: true
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }]
    ]
  }
})
