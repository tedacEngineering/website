import { defineField, defineType } from 'sanity';

export const job = defineType({
  name: 'job',
  title: 'Job opening',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'department', type: 'string', options: { list: ['Engineering', 'Operations', 'Projects', 'HSE', 'Integrity', 'Procurement', 'Admin and finance', 'Early careers'] } }),
    defineField({ name: 'location', type: 'string', initialValue: 'Port Harcourt' }),
    defineField({ name: 'type', title: 'Employment type', type: 'string', options: { list: ['Full-time', 'Contract', 'Trainee', 'Internship'] }, initialValue: 'Full-time' }),
    defineField({ name: 'summary', title: 'Short summary (shown in the list)', type: 'text', rows: 2, validation: (r) => r.required().max(200) }),
    defineField({ name: 'description', title: 'Full description (responsibilities, requirements)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'deadline', title: 'Application deadline (optional)', type: 'date' }),
    defineField({ name: 'active', title: 'Show on website', description: 'Turn off to hide the job without deleting it.', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'department' } },
});
