export default function createSlug(text: string) {
  // Convert to lowercase and replace:
  // spaces with hyphens
  // special characters
  const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  return slug
}