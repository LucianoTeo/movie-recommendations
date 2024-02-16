export default function createSlug(text: string) {
  const slug = text.toLocaleLowerCase().split(' ').join('-')
  return slug
}