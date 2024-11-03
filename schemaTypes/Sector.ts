import {defineType} from 'sanity'
export default defineType({
  name: 'sector',
  title: 'Secteur',
  type: 'document',
  fields: [
    {
      name: 'sectorName',
      title: 'Nom du secteur',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
