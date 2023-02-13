import { defineDocumentType, makeSource, type ComputedFields, } from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(0).join('/'),
  },
};

export const Notes = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    unit: {
      type: 'string',
      description: 'The unit of the post',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'string',
      description: 'The date of the post',
      required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    thumbnail: {
        type: 'string',
        required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath.split('/').slice(0).join('/')}`,
    },
    ...computedFields,
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Notes],
  mdx: { 
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  }
})


/* 
  "title": "Quadratics: Focus and Directrix",
  "description": "Learn about the line and point important for understanding Parabolas.",
  "date": "1/1/2023",
  "thumbnail": "/images/focus-directix.png",
*/

