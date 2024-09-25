import {defineType, defineArrayMember, Rule} from 'sanity'

// 1. Define Reusable Block Styles (e.g., Normal, H1, H2)
const blockStyles = [
  {title: 'Normal', value: 'normal'},
  {title: 'H1', value: 'h1'},
  {title: 'H2', value: 'h2'},
  {title: 'H3', value: 'h3'},
  {title: 'H4', value: 'h4'},
  {title: 'paragraph', value: 'p'},
  {title: 'Quote', value: 'blockquote'},
]

// 2. Define Reusable Block Lists (e.g., Bullet, Numbered)
const blockLists = [
  {title: 'Bullet', value: 'bullet'},
  {title: 'Numbered', value: 'numbered'},
]

// 3. Define Reusable Block Decorators (e.g., Strong, Emphasis)
// Todo to be extended based on UX needs
const blockDecorators = [
  {title: 'Strong', value: 'strong'},
  {title: 'Emphasis', value: 'em'},
]

// 4. Define Reusable Link Annotation (for hyperlinks)
const internalLinkAnnotation = {
  title: 'Lien interne',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      title: 'Page',
      name: 'reference',
      type: 'reference',
      to: [{type: 'content'}], // Replace 'page' with the type of your page
    },
  ],
}

const externalLinkAnnotation = {
  title: 'Lien externe',
  name: 'externalLink',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (rule: Rule) => rule.required(), // Explicitly define the Rule type
    },
  ],
}

// 5. Define a Source Annotation (for attributing content)
const sourceAnnotation = {
  title: 'Source',
  name: 'source',
  type: 'object',
  fields: [
    {name: 'text', type: 'string', title: 'Source text'},
    {name: 'url', type: 'url', title: 'Source URL'},
  ],
}

// 7. Block Content Schema
export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: blockStyles,
      lists: blockLists,
      marks: {
        decorators: blockDecorators,
        annotations: [internalLinkAnnotation, externalLinkAnnotation, sourceAnnotation], // Add source annotation here
      },
    }),
    defineArrayMember({
      title: 'Figure',
      name: 'figure',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    }),
  ],
})
