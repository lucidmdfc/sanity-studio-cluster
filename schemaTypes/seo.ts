import {defineType} from 'sanity'
import {slugify} from '../utils/slugify' // Import custom function to format SEO friendly URLs

export default defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      // Add validation for maximum and minimum length (e.g., 60 characters)
      description: 'The title that appears in search engine results.',
      validation: (Rule) =>
        Rule.min(50)
          .max(70)
          .required()
          .warning('Meta title should be between 50 and 70 characters long'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => slugify(input), // Use custom slugify function
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      // Add validation for maximum and minimum length (e.g., 150-160 characters)
      description: 'A brief summary of the content that appears in search engine results.',
      validation: (Rule) =>
        Rule.min(150)
          .max(300)
          .required()
          .warning('Meta description should be between 150 and 300 characters long'),
    },

    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      // Consider adding a validation for maximum number of keywords
      validation: (Rule) => Rule.min(2).warning('Meta keywords should not exceed 10').required(),
    },
    {
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      description:
        'La fonctionnalité Opengraph vous permet de choisir un titre et une image différent pour partager votre contenu sur chaque réseau social',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          // Consider inheriting from SEO title if not overridden
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          // Consider inheriting from meta description if not overridden
        },
        {
          name: 'image',
          title: 'Image',
          type: 'reference',
          to: [{type: 'imageAsset'}],
        },
        // this feature helps improving readability for social MEdia URLs (not needed yet)
        // {
        //   name: 'url',
        //   title: 'URL',
        //   type: 'url',
        // Consider using a computed field based on the document's URL
        // },
      ],
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Twitter Title',
          type: 'string',
          // Consider inheriting from SEO title or Open Graph title if not overridden
        },
        {
          name: 'description',
          title: 'Twitter Description',
          type: 'text',
          // Consider inheriting from meta description or Open Graph description if not overridden
        },
        {
          name: 'image',
          title: 'Twitter Image',
          type: 'reference',
          to: [{type: 'imageAsset'}],
        },
        {
          name: 'cardType',
          title: 'Card Type',
          type: 'string',
          options: {
            list: [
              {title: 'Summary', value: 'summary'},
              {title: 'Summary with Large Image', value: 'summary_large_image'},
              {title: 'Photo', value: 'photo'},
              {title: 'Video', value: 'video'},
              {title: 'Gallery', value: 'gallery'},
            ],
          },
        },
        {
          name: 'site',
          title: 'Site Handle',
          type: 'string',
          description: 'Your Twitter username (e.g., @yourusername)',
        },
        {
          name: 'creator',
          title: 'Creator Handle',
          type: 'string',
          description: 'The Twitter username of the content creator (e.g., @authorusername)',
        },
      ],
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      description:
        'Description for noindex: Activez cette fonctionnalité UNIQUEMENT si vous désirez que les moteurs de recherche ne détectent pas votre article!',
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      description:
        'Cet attribut indique aux moteurs de recherche de ne pas suivre les liens présents sur la page',
    },
    {
      name: 'robots',
      title: 'Robots Directives',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Index', value: 'index'},
          {title: 'Noindex', value: 'noindex'},
          {title: 'Follow', value: 'follow'},
          {title: 'Nofollow', value: 'nofollow'},
          // Add other directives as needed
        ],
      },
    },
  ],
})
