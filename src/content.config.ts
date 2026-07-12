import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import {
  bioSchema,
  educationSchema,
  metaSchema,
  projectSchema,
  ratingCollectionSchema,
  researchSchema,
  skillsSchema,
  workSchema,
} from '@/lib/profile-schema'

const topic = (file: string) =>
  glob({
    pattern: file,
    base: './src/data',
  })

const meta = defineCollection({
  loader: topic('meta.md'),
  schema: metaSchema,
})

const bio = defineCollection({
  loader: topic('bio.md'),
  schema: bioSchema,
})

const education = defineCollection({
  loader: topic('education.md'),
  schema: educationSchema,
})

const skills = defineCollection({
  loader: topic('skills.md'),
  schema: skillsSchema,
})

const work = defineCollection({
  loader: topic('work.md'),
  schema: workSchema,
})

const research = defineCollection({
  loader: topic('research.md'),
  schema: researchSchema,
})

const rating = defineCollection({
  loader: topic('rating.md'),
  schema: ratingCollectionSchema,
})

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/data/projects',
  }),
  schema: projectSchema,
})

export const collections = {
  meta,
  bio,
  education,
  skills,
  work,
  research,
  rating,
  projects,
}
