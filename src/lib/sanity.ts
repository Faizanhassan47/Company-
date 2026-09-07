import { createClient } from '@sanity/client';
import { env } from '@/config/env';

export const sanityClient = createClient({
  projectId: env.sanityProjectId || 'demo-placeholder',
  dataset: env.sanityDataset,
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
