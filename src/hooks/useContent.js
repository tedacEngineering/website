import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';
import { NEWS, ROLES } from '../data/site';
import { p } from '../data/images';

const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const NEWS_QUERY = `*[_type == "news"] | order(publishedAt desc) { title, "slug": slug.current, category, publishedAt, excerpt, "image": mainImage, body }`;
const JOBS_QUERY = `*[_type == "job" && active != false] | order(_createdAt desc) { title, department, location, type, summary, description, deadline }`;

const mapNews = (n) => ({
  slug: n.slug, title: n.title, cat: n.category || 'News', excerpt: n.excerpt || '', date: fmt(n.publishedAt),
  image: n.image ? urlFor(n.image).width(1400).url() : p('news-1'), body: n.body || [],
});
const mapJob = (j) => ({
  title: j.title, dept: j.department || 'General', where: j.location || 'Port Harcourt', type: j.type || 'Full-time',
  about: j.summary || '', description: j.description || [], deadline: j.deadline ? fmt(j.deadline) : '',
});

// Live content from Sanity when configured, otherwise (or if the request fails) the demo content.
function useSanity(query, map, fallback) {
  const [state, setState] = useState({ items: client ? [] : fallback, loading: Boolean(client) });
  useEffect(() => {
    if (!client) return undefined;
    let live = true;
    client.fetch(query)
      .then((rows) => live && setState({ items: rows.map(map), loading: false }))
      .catch(() => live && setState({ items: fallback, loading: false }));
    return () => { live = false; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return state;
}

export const useNews = () => useSanity(NEWS_QUERY, mapNews, NEWS);
export const useJobs = () => useSanity(JOBS_QUERY, mapJob, ROLES);
