import {defineType} from 'sanity'
import content from './content'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{type: 'imageAsset'}],
    },
    ...content.fields.filter(
      (field) => field.name === 'slug' || field.name === 'title' || field.name === 'SubTitle',
    ),
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().min(50).max(200),
    },
    ...content.fields.filter((field) => field.name === 'body'),
    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'pdfFile',
      type: 'file',
      title: 'PDF File',
      options: {
        accept: '.pdf',
      },
    },
  ],
})
