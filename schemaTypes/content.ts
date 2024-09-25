import {defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'
import {slugify} from '../utils/slugify'
import {isUniqueAcrossAllDocuments} from '../utils/isUniqueAcrossAllDocuments'
import {slugValidation} from '../utils/slugValidation'
export default defineType({
  name: 'content',
  title: 'Contenu',
  type: 'object',
  icon: AddDocumentIcon,
  fields: [
    {
      name: 'title',
      title: 'Titre du contenu',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: 'slug',
      title: "Slug pour l'URL",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => slugify(input),
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: slugValidation,
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt', //Shows the chosen expcrept for the communiquein their Home UI
      title: 'Extrait',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'Brouillon', value: 'draft'},
          {title: 'Publié', value: 'published'},
          {title: 'Archivé', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    },
  ],
})
