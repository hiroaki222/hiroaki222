// Profile data loader.
//
// content は src/data/*.md にトピック別 (meta / bio / education /
// skills / projects / research / rating) で分割されている.
// Astro Content Collections で各 frontmatter を build 時に検証し,
// ここでは F1Layout / LiquidLayout が共有する Profile object に組み立てる.

import { getCollection, getEntry } from 'astro:content'
import type {
  Profile,
  ProjectFrontmatter,
} from '@/lib/profile-schema'

export type {
  Assessment,
  AssessmentAxis,
  EducationEntry,
  LoanEntry,
  Profile,
  Project,
  Rating,
  SkillGroup,
} from '@/lib/profile-schema'

const required = <T>(entry: T | undefined, label: string): T => {
  if (!entry) throw new Error(`Missing required content entry: ${label}`)
  return entry
}

const slugOf = (id: string) => id.replace(/\.md$/, '').replace(/^\d+-/, '')

// 継続中のプロジェクトは年に「–」を付けて開始年であることを示す.
const displayYear = ({ releaseDate, ongoing }: ProjectFrontmatter) =>
  ongoing ? `${releaseDate.slice(0, 4)} –` : releaseDate.slice(0, 4)

const loadProfile = async (): Promise<Profile> => {
  const [meta, bio, education, skills, work, research, rating, projectEntries] = await Promise.all([
    getEntry('meta', 'meta'),
    getEntry('bio', 'bio'),
    getEntry('education', 'education'),
    getEntry('skills', 'skills'),
    getEntry('work', 'work'),
    getEntry('research', 'research'),
    getEntry('rating', 'rating'),
    getCollection('projects'),
  ])

  const metaEntry = required(meta, 'meta/meta')
  const bioEntry = required(bio, 'bio/bio')
  const educationEntry = required(education, 'education/education')
  const skillsEntry = required(skills, 'skills/skills')
  const workEntry = required(work, 'work/work')
  const researchEntry = required(research, 'research/research')
  const ratingEntry = required(rating, 'rating/rating')

  // projects は src/data/projects/ に 1プロジェクト = 1md.
  // 表示順は releaseDate の降順のみ. 同月はファイル名の辞書順で安定させる.
  const projects = projectEntries
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((entry) => ({
      slug: slugOf(entry.id),
      year: displayYear(entry.data),
      ...entry.data,
    }))
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))

  return {
    ...metaEntry.data,
    ...bioEntry.data,
    ...educationEntry.data,
    ...skillsEntry.data,
    ...workEntry.data,
    ...researchEntry.data,
    ...ratingEntry.data,
    projects,
  }
}

export const profile = await loadProfile()

// Minimal inline-markdown renderer for [text](url) and **bold** in prose fields.
export const renderInline = (text: string): string =>
  text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
