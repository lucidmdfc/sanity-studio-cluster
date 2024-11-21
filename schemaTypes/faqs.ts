import { defineType } from 'sanity';

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required().error('A question is required'),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text', 
      validation: (Rule) => Rule.required().error('An answer is required'),
    },
  ],
});
