import {defineType} from 'sanity'
export default defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'socialLinks',
      title: 'Liens sociaux',
      type: 'socialMedia',
    },
    {
      name: 'sitemapLinks',
      title: 'Liens du Sitemap',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Nom du lien',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL du lien',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            // Add priority and change frequency for sitemap.xml
            {
              name: 'priority',
              title: 'Priorité',
              type: 'number',
              description: 'La priorité relative de cette URL dans le sitemap (entre 0.0 et 1.0)',
              validation: (Rule) => Rule.min(0).max(1).precision(1),
              initialValue: 0.5, // Default priority
            },
            {
              name: 'changefreq',
              title: 'Fréquence de modification',
              type: 'string',
              options: {
                list: [
                  {title: 'Always', value: 'always'},
                  {title: 'Hourly', value: 'hourly'},
                  {title: 'Daily', value: 'daily'},
                  {title: 'Weekly', value: 'weekly'},
                  {title: 'Monthly', value: 'monthly'},
                  {title: 'Yearly', value: 'yearly'},
                  {title: 'Never', value: 'never'},
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      title: 'Texte de copyright',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100), // Exemple de validation pour le texte de copyright
    },
    {
      name: 'extraSections',
      title: 'Sections supplémentaires',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre de la section',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Contenu de la section',
              type: 'blockContent', // Utilise un contenu riche pour permettre plus de flexibilité
            },
          ],
        },
      ],
    },
  ],
})
