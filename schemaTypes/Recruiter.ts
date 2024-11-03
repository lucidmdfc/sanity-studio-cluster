import {defineType} from 'sanity'
export default defineType({
  title: 'Recruiter',
  name: 'recruiter',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sector',
      type: 'reference',
      title: 'Sector',
      to: [{type: 'sector'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      type: 'reference',
      title: 'Company',
      to: [{type: 'company'}],
      validation: (Rule) => Rule.required(),
    },
  ],
})
