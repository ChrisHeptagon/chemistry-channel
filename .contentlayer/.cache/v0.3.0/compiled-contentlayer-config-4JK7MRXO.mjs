// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(0).join("/")
  }
};
var Notes = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    unit: {
      type: "string",
      description: "The unit of the post",
      required: true
    },
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath.split("/").slice(0).join("/")}`
    },
    ...computedFields
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Notes],
  mdx: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath]
  }
});
export {
  Notes,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4JK7MRXO.mjs.map
