// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// canonical / sitemap の絶対 URL に使う公開ドメイン。
// build:f1 は h-takahara.com、build:liquid は SITE_URL で hiroaki222.com を渡す。
const site = process.env.SITE_URL ?? 'https://h-takahara.com';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
});
