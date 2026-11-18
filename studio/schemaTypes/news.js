import { defineField, defineType } from 'sanity';

export const news = defineType({
  name: 'news',
  title: 'News article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Headline', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Web address (click Generate)', type: 'slug', options: { source: 'title', maxLength: 80 }, validation: (r) => r.required() }),
    defineField({ name: 'category', type: 'string', options: { list: ['Company', 'HSE', 'Insight', 'Project', 'Announcement'] }, initialValue: 'Company' }),
    defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime', initialValue: () => new Date().toISOString(), validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Short summary (shown on cards)', type: 'text', rows: 3, validation: (r) => r.required().max(220) }),
    defineField({ name: 'mainImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', title: 'Article', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
  ],
  orderings: [{ title: 'Newest first', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'mainImage' } },
});
