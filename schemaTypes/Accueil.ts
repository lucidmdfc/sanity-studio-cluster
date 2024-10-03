import {defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import content from './content'
export default defineType({
  name: 'Accueil',
  title: 'Accueil',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{type: 'imageAsset'}],
    },

    ...content.fields.filter(
      (field) =>
        field.name === 'slug' ||
        field.name === 'title' ||
        field.name === 'SubTitle' ||
        field.name === 'body',
    ),
  ],
})
