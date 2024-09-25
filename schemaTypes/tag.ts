import {defineType} from 'sanity'
import {TagsIcon} from '@sanity/icons'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagsIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(50),
      // Required tag title, minimum 3 characters, maximum 50 characters
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A unique identifier for the tag based on its title.',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
      // Automatically generated slug based on the title, ensuring uniqueness for this tag
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      // Optional description for the tag
    },
  ],
})
