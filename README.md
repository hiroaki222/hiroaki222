## Hiroaki

Engineer & AI researcher.

**Engineering** — software, infrastructure

**Research** — emotion-mediated personalized image aesthetic assessment (PIAA), explainable AI (XAI)

**Portfolio** — [h-takahara.com](https://h-takahara.com) · [hiroaki222.com](https://hiroaki222.com)

### Selected work

**[transcrate](https://github.com/hiroaki222/transcrate)** — Answers whether the tracks on a USB stick will play in the booth, and converts only the ones that will not. The compatibility rules are transcribed from the manuals of ten Pioneer DJ and AlphaTheta players. Rust / Tauri 2 / React 19.

**[decktime](https://github.com/hiroaki222/decktime)** — Full-screen countdown timer for DJ sets, with progressive alerts as the set runs out. Single HTML file, no framework and no build step. [decktime.hiroaki222.com](https://decktime.hiroaki222.com)

**[uvr-headless](https://github.com/hiroaki222/uvr-headless)** — Ultimate Vocal Remover with the tkinter GUI stripped out, exposing the separation engines through a JSON interface an AI agent can drive without a human in the loop.

**[XPASS-Vis](https://arxiv.org/abs/2606.15629)** — The first cross-domain personalized image aesthetic assessment dataset: 129 raters, 6,526 stimuli, 87,836 ratings across art, fashion, and scenery. arXiv preprint, second author.

### About this repository

Both portfolio sites are built from this one repository. The profile content lives as Markdown frontmatter in `src/data/`, and each site is a separate Astro layout reading that same data, so editing the content updates both.

```sh
bun install
bun run dev:f1      # h-takahara.com  → localhost:4321
bun run dev:liquid  # hiroaki222.com  → localhost:4322
```

`bun run build:all` writes both sites to `dist/`. Pushing to `main` builds them in a matrix and deploys each to its own Cloudflare Pages project.
