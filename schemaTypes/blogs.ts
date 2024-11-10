import {defineType} from 'sanity'
import {SchemaIcon} from '@sanity/icons'
import content from './content'
export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: SchemaIcon,
  fields: [
    // inherit the content field title and slug
    ...content.fields.filter(
      (field) => field.name === 'title' || field.name === 'slug' || field.name === 'body',
    ),

    // Additional fields specific to blog
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'illustrations',
      title: 'Illustrations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'illustration'}]}],
    },
    {
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
      description: 'Estimated reading time in minutes',
    },
    {
      name: 'publishedAt',
      title: 'Published On',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{type: 'seo'}],
    },
    ...content.fields.filter((field) => field.name === 'tags'),
    {
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{type: 'author'}],
    },
    // Blog category: official or community
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Official', value: 'official'},
          {title: 'Community', value: 'community'},
        ],
        layout: 'radio', // Present options as radio buttons
        defaultValue: 'official', // Default value
      },
      validation: (Rule) => Rule.required(), // Ensure a category is selected
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
