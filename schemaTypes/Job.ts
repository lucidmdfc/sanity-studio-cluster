import {defineType} from 'sanity'

export default defineType({
  name: 'job',
  type: 'document',
  title: 'Job',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'PublicationDate',
      type: 'date',
      title: 'Publication Date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'JobPost',
      type: 'file',
      title: 'Job Post',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sector',
      type: 'reference',
      title: 'Sector',
      to: [{type: 'sector'}],
      validation: (Rule) => Rule.required(),
    },
  ],
})
