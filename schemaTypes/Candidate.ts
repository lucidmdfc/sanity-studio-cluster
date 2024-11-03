import {defineType} from 'sanity'
export default defineType({
  name: 'candidate',
  title: 'Candidat',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'Prénom',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Nom de famille',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Téléphone',
    },
    {
      name: 'InterestedSector',
      type: 'array',
      title: 'Secteur interessé',
      of: [{type: 'reference', to: [{type: 'sector'}]}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'CV',
      title: 'CV',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
})
