import glob from 'fast-glob'
import * as path from 'path'

async function importCourse(courseFilenames) {
  let { meta, default: component } = await import(
    `../pages/courses/${courseFilenames}`
  )
  return {
    slug: courseFilenames.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllCourses() {
  let courseFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/courses'),
  })

  let courses = await Promise.all(courseFilenames.map(importCourse))

  return courses.sort()
}
