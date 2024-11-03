import {defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../utils/isUniqueAcrossAllDocuments'
export default defineType({
  name: 'jobSkill',
  type: 'document',
  title: 'Job Skill',
  fields: [
    {
      name: 'slug', // The field name for the slug.
      type: 'slug', // The field type is 'slug', which supports unique, URL-friendly strings.
      title: 'Slug', // The display title of the field in the Sanity Studio.
      options: {
        // The 'source' defines how the slug is generated automatically.
        // In this case, it is generated by concatenating the job, and skill references.
        source: (doc) => `${doc.job._ref}-${doc.skill._ref}`,
        isUnique: isUniqueAcrossAllDocuments,
      },

      // The 'readOnly' property is dynamically set to make the slug read-only after it's created.
      // If the slug already exists (i.e., 'document.slug.current' is populated), it becomes read-only.
      readOnly: ({document}) => !!document.slug?.current,

      // The validation ensures that the slug is required.
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'job',
      title: 'Job',
      type: 'reference',
      to: [{type: 'job'}],
    },
    {
      name: 'skill',
      title: 'Skill',
      type: 'reference',
      to: [{type: 'skill'}],
    },
  ],
})