import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity';

const components = {
  block: {
    h2: ({ children }) => <h2 className="!mt-12 text-3xl font-bold text-navy">{children}</h2>,
    h3: ({ children }) => <h3 className="!mt-8 text-2xl font-bold text-navy">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gold pl-5 text-xl font-semibold italic text-navy">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
  },
  marks: { link: ({ value, children }) => <a href={value?.href} className="font-semibold text-gold-deep underline">{children}</a> },
  types: { image: ({ value }) => <img src={urlFor(value).width(1200).url()} alt="" className="my-8 w-full" loading="lazy" /> },
};

// Accepts Sanity rich text (array of blocks) or the demo content (array of strings).
export default function RichText({ value = [] }) {
  if (!value.length) return null;
  if (typeof value[0] === 'string') return value.map((t, i) => <p key={i}>{t}</p>);
  return <PortableText value={value} components={components} />;
}
