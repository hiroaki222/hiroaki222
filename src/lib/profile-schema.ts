import { z } from 'astro/zod'

const nullableString = z.string().nullable()
const optionalNullableString = z.string().nullable().optional()

export const educationEntrySchema = z.object({
  years: z.string(),
  institution: z.string(),
  program: z.string(),
  note: nullableString,
  yearsEn: z.string().optional(),
  institutionEn: z.string().optional(),
  programEn: z.string().optional(),
  noteEn: optionalNullableString,
  swatch: z.string().optional(),
  swatchColor: z.string().optional(),
  todo: z.boolean().optional(),
  details: z.array(z.string()).optional(),
  detailsEn: z.array(z.string()).optional(),
})

export const loanEntrySchema = z.object({
  years: z.string(),
  yearsEn: z.string().optional(),
  institution: z.string(),
  institutionEn: z.string().optional(),
})

export const skillGroupSchema = z.object({
  label: z.string(),
  items: z.array(z.string()),
})

export const assessmentAxisSchema = z.object({
  key: z.string(),
  label: z.string(),
  score: z.number().int().min(0).max(99),
  note: z.string().optional(),
  noteJa: z.string().optional(),
})

export const assessmentSchema = z.object({
  date: z.string(),
  method: z.string(),
  methodJa: z.string().optional(),
  overall: z.number().int().min(0).max(99),
  axes: z.array(assessmentAxisSchema),
})

export const ratingSchema = z.object({
  positions: z.array(z.string()).min(1),
  skillMoves: z.number().int().min(1).max(5),
  weakFoot: z.number().int().min(1).max(5),
  playstyles: z.array(
    z.object({
      label: z.string(),
      ja: z.string(),
      en: z.string().optional(),
    }),
  ),
  subStats: z.array(
    z.object({
      key: z.string(),
      items: z.array(
        z.object({
          label: z.string(),
          score: z.number().int().min(0).max(99),
          why: z.string().optional(),
          whyEn: z.string().optional(),
        }),
      ),
    }),
  ),
})

export const projectSchema = z.object({
  year: z.string(),
  name: z.string(),
  description: z.string(),
  descriptionEn: z.string().optional(),
  url: nullableString,
  category: z.string(),
  todo: z.boolean().optional(),
})

export const metaSchema = z.object({
  nameJa: z.string(),
  nameEn: z.string(),
  nameEnFirst: z.string(),
  nameEnLast: z.string(),
  role: z.string(),
  roleShort: z.string(),
  tagline: z.string(),
  shirtNumber: z.string(),
  nation: z.string(),
  nationCode: z.string(),
  location: z.string(),
  birthplace: z.string(),
  birthDate: optionalNullableString,
  foot: z.string(),
  licences: z.array(z.object({ ja: z.string(), en: z.string().optional() })).optional(),
  careerCounts: z
    .object({
      projects: z.number().int().nonnegative().optional(),
      publications: z.number().int().nonnegative().optional(),
    })
    .optional(),
  currentSeason: z.string(),
  joined: z.string(),
  club: z.object({
    name: z.string(),
    label: z.string(),
    since: z.string(),
    class: z.string(),
    lab: optionalNullableString,
    labEn: optionalNullableString,
  }),
  contact: z.object({
    github: z.url(),
    githubHandle: z.string(),
    web: z.url(),
    webLabel: z.string(),
    emailUser: optionalNullableString,
    emailDomain: optionalNullableString,
  }),
})

export const bioSchema = z.object({
  bio: z.array(z.string()).min(1),
  bioEn: z.array(z.string()).optional(),
  bioOutro: z
    .object({
      f1: z.string(),
      f1En: z.string().optional(),
      liquid: z.string(),
      liquidEn: z.string().optional(),
    })
    .optional(),
  photo: z.string().optional(),
  quote: z.string(),
  quoteEn: z.string().optional(),
  quoteBy: z.string().optional(),
})

export const educationSchema = z.object({
  education: z.array(educationEntrySchema),
})

export const skillsSchema = z.object({
  assessment: assessmentSchema,
  skills: z.array(skillGroupSchema),
})

export const workSchema = z.object({
  work: z.array(educationEntrySchema),
  internships: z.array(loanEntrySchema).optional(),
})

export const researchSchema = z.object({
  research: z.string(),
  researchEn: z.string().optional(),
})

export const ratingCollectionSchema = z.object({
  rating: ratingSchema,
})

export type EducationEntry = z.infer<typeof educationEntrySchema>
export type LoanEntry = z.infer<typeof loanEntrySchema>
export type SkillGroup = z.infer<typeof skillGroupSchema>
export type AssessmentAxis = z.infer<typeof assessmentAxisSchema>
export type Assessment = z.infer<typeof assessmentSchema>
export type Rating = z.infer<typeof ratingSchema>
export type ProjectFrontmatter = z.infer<typeof projectSchema>

export type Project = ProjectFrontmatter & {
  slug: string
}

export type Profile = z.infer<typeof metaSchema> &
  z.infer<typeof bioSchema> &
  z.infer<typeof educationSchema> &
  z.infer<typeof skillsSchema> &
  z.infer<typeof workSchema> &
  z.infer<typeof researchSchema> &
  z.infer<typeof ratingCollectionSchema> & {
    projects: Project[]
  }
