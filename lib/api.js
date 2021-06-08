import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const partialDirectory = join(process.cwd(), 'partials')
const postsDirectory = join(process.cwd(), 'posts')

export function getPartial(fileName) {
  const mdFile = join(partialDirectory, `${fileName}.md`)
  const fileContents = fs.readFileSync(mdFile, 'utf8')
  const { content } = matter(fileContents)
  return content
}


export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {...data, content, slug: realSlug}
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
