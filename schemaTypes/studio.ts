import { defineType } from 'sanity'

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',  
    },
    {
      name: 'review',
      title: 'Review',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'buttonCta',
      title: 'Button CTA',
      type: 'string',
    },
    {
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
    },
    {
      name: 'illustrations',
      title: 'Illustrations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'illustration' }] }],
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faqs' }] }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{ type: 'seo' }],
    },
  ],
})
