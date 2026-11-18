import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

// null when no project ID is set: the site then shows the demo content from src/data/site.js
export const client = projectId
  ? createClient({ projectId, dataset: import.meta.env.VITE_SANITY_DATASET || 'production', apiVersion: '2024-10-01', useCdn: true })
  : null;

const builder = client ? imageUrlBuilder(client) : null;
export const urlFor = (source) => builder.image(source);
