import type { AssessmentAxis, Rating } from '@/lib/profile'

export type Tip = {
  ja: string
  en: string
}

export type RatingAxis = AssessmentAxis & {
  items: Rating['subStats'][number]['items']
}
