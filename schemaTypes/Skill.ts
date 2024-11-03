import {defineType} from 'sanity'

export default defineType({
  title: 'Skill',
  name: 'skill',
  type: 'document',
  fields: [
    {
      name: 'SkillName',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('A skill name is required'),
    },
    {
      name: 'Subskills',
      title: 'Subskills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
      options: {
        filter: 'name != $currentSkillName',
      },
    },
  ],
})
