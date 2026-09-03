import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'demo-placeholder', // Replace with your Sanity Project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
});

// Example fetch function for future CMS integration
export async function fetchProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    client,
    slug,
    description,
    "imageUrl": mainImage.asset->url
  }`;
  return sanityClient.fetch(query);
}
