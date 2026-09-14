import type { APIRoute } from 'astro'

// build ごとに出力されるページが異なる (gen:f1 は index のみ、gen:liquid は index + rating)
// ため、ページ一覧はディレクトリから引く。`_` 始まりは Astro の route 対象外。
const paths = Object.keys(import.meta.glob('./*.astro'))
  .map((file) => file.slice('./'.length, -'.astro'.length))
  .filter((name) => !name.startsWith('_'))
  .map((name) => (name === 'index' ? '' : name))

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`).join('\n')
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  )
}
