import {defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'
import content from './content'
export default defineType({
  name: 'communiques',
  title: 'Communiqué de presse',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    // inherit all fields  from content
    ...content.fields,
    // Additional fields specific to blog
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'illustrations',
      title: 'Illustrations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'illustration'}]}],
    },
    // isDisplayedOnHome field to add the blog to newsfeed
    {
      name: 'isDisplayedOnHome',
      title: 'Display on Homepage',
      type: 'boolean',
      description: 'Indicates whether this blog post will be displayed on the homepage.',
      initialValue: false, // Default value
      validation: (Rule) => Rule.required(), // Validation to ensure the field is defined
    },
  ],
})
