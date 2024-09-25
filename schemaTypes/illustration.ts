import {defineType} from 'sanity'

export default defineType({
  name: 'illustration',
  title: 'Illustration',
  type: 'document',
  fields: [
    {
      name: 'imageAsset',
      title: 'Image Asset',
      type: 'reference',
      to: [{type: 'imageAsset'}], // Referencing the standalone image asset document
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'isCoverImage',
      type: 'boolean',
      title: 'Is Cover Image',
      description:
        'If checked, this image will be used as the cover image for the associated content.',
      initialValue: false,
    },
    {
      name: 'isFeaturedImage',
      type: 'boolean',
      title: 'Is Featured Image',
      description:
        'If checked, this image will be used as the main featured image for SEO purposes.',
      initialValue: false,
    },
  ],
})
