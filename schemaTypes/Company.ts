import {defineType} from 'sanity'
export default defineType({
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
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
