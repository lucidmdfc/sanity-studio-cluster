import {Rule} from 'sanity'

export default {
  name: 'socialMedia',
  type: 'object',
  title: 'Social Media Share',
  fields: [
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).error('Please enter a valid URL starting with http or https'),
    },
    {
      name: 'twitter',
      type: 'url',
      title: 'Twitter',
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).error('Please enter a valid URL starting with http or https'),
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn',
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).error('Please enter a valid URL starting with http or https'),
    },
  ],
}
