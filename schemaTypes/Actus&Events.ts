import {defineType} from 'sanity'
import content from './content'
export default defineType({
  name: 'Actus&Events',
  title: 'Actus et Events',
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
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(15).max(350),
    },
    ...content.fields.filter(
      (field) => field.name === 'body' || field.name === 'tags' || field.name === 'author',
    ),

    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timeToRead',
      title: 'Time to read',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
})
