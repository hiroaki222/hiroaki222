export type EducationEntry = {
  years: string
  institution: string
  program: string
  note?: string
  todo?: boolean
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type Project = {
  year: string
  name: string
  description: string
  url?: string
  category: string
  todo?: boolean
}

export type Profile = {
  nameJa: string
  nameEn: string
  nameEnFirst: string
  nameEnLast: string
  role: string
  roleShort: string
  shirtNumber: string
  nation: string
  nationCode: string
  location: string
  birthplace: string
  foot: string
  currentSeason: string
  joined: string
  bio: string[]
  quote: string
  education: EducationEntry[]
  skills: SkillGroup[]
  projects: Project[]
  research: string
  contact: {
    github: string
    githubHandle: string
    web: string
    webLabel: string
    email?: string
  }
  club: {
    name: string
    label: string
    since: string
    class: string
    lab?: string
  }
}

export const profile: Profile = {
  nameJa: '高原 ひろあき',
  nameEn: 'Hiroaki Takahara',
  nameEnFirst: 'Hiroaki',
  nameEnLast: 'Takahara',
  role: 'Software Engineer · MSc Student at JAIST',
  roleShort: 'Software Engineer',
  shirtNumber: '2',
  nation: 'Japan',
  nationCode: 'JPN',
  location: 'Kanazawa, JP',
  birthplace: 'Hokkaido',
  foot: 'Right',
  currentSeason: '2026/27',
  joined: '2024',
  bio: [
    '北海道生まれのソフトウェアエンジニア. 現在は北陸先端科学技術大学院大学 (JAIST) 情報科学研究科の修士課程に在籍し, [研究テーマ TODO] について研究しています.',
    '個人プロジェクトとして [Quill](https://hiroaki222.com/docs) という personal knowledge management ツールを Cloudflare stack 上で継続的に開発中. edge computing と local-first software の交差点に関心があり, 研究と実装の両輪で活動しています.',
    '[TODO — キャリアの経緯や動機を 3〜4 文で. 学部時代から現在に至るまでの流れ, 印象的な出来事など.]',
  ],
  quote: 'Ship early, ship often — 完璧を待たずに手を動かす方が, 結果的に速く遠くまで行ける.',
  education: [
    {
      years: '2024 – 現在',
      institution: 'JAIST (北陸先端科学技術大学院大学)',
      program: '情報科学研究科 修士課程',
      note: '[研究室 TODO]',
    },
    {
      years: '2020 – 2024',
      institution: '[大学名 TODO]',
      program: '[学部・学科 TODO]',
      todo: true,
    },
  ],
  skills: [
    { label: 'Languages', items: ['TypeScript', 'Rust', 'Python', 'Go'] },
    { label: 'Frontend', items: ['React', 'Astro', 'TanStack', 'Tailwind'] },
    { label: 'Infra', items: ['Cloudflare Workers', 'D1', 'R2', 'KV', 'Docker'] },
    { label: 'Tools', items: ['Git', 'Neovim', 'Linux'] },
  ],
  projects: [
    {
      year: '2026 –',
      name: 'Quill',
      description: 'Personal knowledge management tool built on Cloudflare Workers stack (Hono / D1 / R2 / KV) with React and TanStack Router.',
      url: 'https://hiroaki222.com/docs',
      category: 'Product',
    },
    {
      year: '2024 –',
      name: '[研究テーマ TODO]',
      description: '[研究テーマの概要 — 現在扱っている問題設定, 使用しているアプローチ, 見えてきた知見を 3〜4 文で.]',
      category: 'Research',
      todo: true,
    },
    {
      year: 'TODO',
      name: '[追加プロダクト TODO]',
      description: '[概要 1〜2 行]',
      category: 'TODO',
      todo: true,
    },
  ],
  research: '[研究テーマ TODO — 現在扱っている問題設定, 使用しているアプローチ, 見えてきた知見を 3〜4 文で.]',
  contact: {
    github: 'https://github.com/hiroaki222',
    githubHandle: '@hiroaki222',
    web: 'https://hiroaki222.com/docs',
    webLabel: 'hiroaki222.com/docs',
    email: undefined,
  },
  club: {
    name: 'JAIST',
    label: 'JAIST 情報科学研究科',
    since: '2024',
    class: 'MSc / Info Science',
    lab: '[研究室 TODO]',
  },
}
