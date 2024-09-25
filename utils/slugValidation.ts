// slugValidation.ts

import {Slug} from 'sanity'

export const slugValidation = (Rule: any) =>
  Rule.required().custom((slug: Slug) => {
    const slugRegex = /^[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*$/u

    if (!slug) {
      return 'Slug is required'
    }

    if (!slugRegex.test(slug.current)) {
      return 'Slug must contain only letters (Arabic, French, English), numbers, and hyphens, and must not start or end with a hyphen'
    }

    if (slug.current.length > 96) {
      return 'Slug should be less than 96 characters'
    }

    return true // Passes validation
  })
