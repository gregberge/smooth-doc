import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { useRouter } from 'next/router'

import DocLayout from '../../components/DocLayout'
import { MDXProvider, } from '../../components/MDX'
import { postDocPaths, DOCS_PATH, sideMenuItems } from '../../utils/mdxUtils'


export default function DocPage({ source, frontMatter, sideNav }) {

  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <DocLayout title={frontMatter.title} navGroups={sideNav} >
      <MDXProvider >
        <MDXRemote {...source} />
      </MDXProvider>
    </DocLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const docFilePath = path.join.apply(null, [DOCS_PATH, ...params.slug])
  const source = fs.readFileSync(`${docFilePath}.mdx`)
  const { content, data } = matter(source)
  const autolink = require('../../lib/remark-autolink-headers')
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [autolink],
    },
    scope: data,
  })
  
  const sideNav = sideMenuItems()
  
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      sideNav,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postDocPaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug: slug.split('/') } }))
    // console.log(paths)
  return {
    paths,
    fallback: false,
  }
}
