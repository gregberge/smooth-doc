import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sideMenuFiles from '../config/sideMenuFiles'

// POSTS_PATH is useful when you want to get the path to a specific file
export const DOCS_PATH = path.join(process.cwd(), 'docs')
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = () => fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))


export const postDocPaths = () => {
  const paths = []
  sideMenuFiles.forEach(section => paths.push(...section.children))
  return paths
}

export const sideMenuItems = () => {
  const menuGroups = []
  sideMenuFiles.forEach(section => {
    const group = {}
    menuGroups.push(group)
    group['section'] = section['section']
    group['children'] = []
    section.children.forEach(file => {
      const postFilePath = path.join(DOCS_PATH, file)
      const source = fs.readFileSync(postFilePath)
      const { data } = matter(source)
      const slug = file.replace(/\.mdx?$/, '')
      group['children'].push({
        slug : `/docs/${slug}`, 
        title: data.title, 
      })
    })
  })
  return menuGroups
}