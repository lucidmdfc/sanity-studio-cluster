import { defineType } from 'sanity'

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'MainTitle',
      type: 'string',
    },
    {
      name: 'subtitile',
      title: 'Subtitile',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'review',
      title: 'Review',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'buttonCTA',
      title: 'ButtonCTA',
      type: 'string',
    },
    {
      name: 'videoTitle',
      title: 'VideoTitle',
      type: 'string',
    },
  ],
})