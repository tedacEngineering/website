import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/site';

export default function Seo({ title, description, path = '/', image = '/og-image.jpg' }) {
  const t = title ? `${title} | ${SITE.short} Engineering` : `${SITE.name} | ${SITE.tagline}`;
  const d = description || 'Multidisciplinary engineering and technical solutions for the energy and industrial sectors, from Port Harcourt, Nigeria.';
  const url = SITE.url + path;
  const ld = {
    '@context': 'https://schema.org', '@type': 'Organization', name: SITE.name, url: SITE.url,
    logo: `${SITE.url}/favicon.svg`, telephone: SITE.phone, email: SITE.email,
    address: { '@type': 'PostalAddress', streetAddress: '8 Panama Estate, Trans Amadi', addressLocality: 'Port Harcourt', addressRegion: 'Rivers State', postalCode: '500101', addressCountry: 'NG' },
  };
  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SITE.url + image} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
