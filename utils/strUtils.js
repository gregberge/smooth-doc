/**
 * generate slug string
 * @param {string} str 
 * @returns string
 */
export const slugify = str => str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

/**
 * cut the last char of string
 * @param {string} str maybe some path like slug
 * @returns string
 */
export const trim = str => str.slice(0, -1)
