---
# Engineering-focused skill matrix. 言語 / framework / infra 詳細.
# 2026-07: 全 GitHub repo (個人 + 勤務先, private 含む) の実コミット分析に基づき全面改訂.
# 載せる基準は「実プロダクト/研究での使用実績が commit で裏付けられること」.
# (Rust / Go / Optuna / TanStack Query / KV / CF Pages は証拠不足で削除)

# AI エージェントによる客観評価 (EAFC の選手レート風, 0-99).
# 2026-07 に AI エージェント 4 体が全 repo (private 含む) の本人コミットを
# 分析して導出. スコア感覚: 90+ = Expert / 80 台 = 実運用で反復した主力領域 /
# 70 台 = Proficient. 将来の EAFC 風レートページでも同データを使う想定.
assessment:
  date: 2026-07
  method: AI agent analysis — 60+ repos, commit-level
  methodJa: AI エージェント 4 体が全 GitHub repo (private 含む) の実コミットを分析した評価
  overall: 83
  axes:
    - key: INF
      label: Cloud / Infra
      score: 88
      note: Multi-cloud serverless IaC (CF + AWS + GCP), OIDC deploy, 4-env CI/CD — built solo
      noteJa: マルチクラウド serverless IaC (CF + AWS + GCP), OIDC deploy, 4 環境 CI/CD を単独構築
    - key: FRO
      label: Frontend
      score: 86
      note: React 19 / TanStack Start / WebGL GIS rendering, adopts latest generation on release
      noteJa: React 19 / TanStack Start / WebGL GIS 描画. 最新世代をリリース直後に実戦投入
    - key: BCK
      label: Backend
      score: 84
      note: Hono + FastAPI, 4 auth stacks, systematic security hardening, idempotency design
      noteJa: Hono + FastAPI の 2 系統, 認証 4 方式, セキュリティ横断対処, 冪等性設計
    - key: DAT
      label: Data / DB
      score: 83
      note: PostGIS + GiST spatial indexing, engine-aware migrations (59 total)
      noteJa: PostGIS + GiST 空間インデックス, DB エンジンの制約を理解した migration 設計 (計 59 本)
    - key: PRC
      label: Practices / Quality
      score: 78
      note: Org-wide conventions authored solo; latest repo has 109 test files + k6 load testing
      noteJa: org 開発規約を単独整備. 最新 repo はテスト 109 ファイル + k6 負荷試験基盤
    - key: MLR
      label: ML / Research
      score: 76
      note: PyTorch + owned CV detection/tracking pipeline; experiment tracking infra still thin
      noteJa: PyTorch + CV 検出/追跡パイプラインを所有. 実験管理基盤は未整備
skills:
  - label: Languages
    items: [TypeScript (JavaScript), Python, SQL, tex, Bash, C/C++]
  - label: Frontend
    items: [React, TanStack Start, React Router, Next.js, Astro, Tailwind CSS, shadcn/ui, Radix UI, PWA / Web Push, i18n (next-intl)]
  - label: Geospatial
    items: [PostGIS, MapLibre GL, deck.gl, PMTiles, tippecanoe]
  - label: Backend
    items: [Hono, FastAPI, Drizzle ORM, Prisma, Better Auth, Valibot, Zod, OpenAPI typegen]
  - label: Cloud / Edge
    items: [Cloudflare Workers, D1, R2, Durable Objects, AWS Lambda, Aurora Serverless v2, ElastiCache, GCP Cloud Run, SST, Vercel]
  - label: Data
    items: [PostgreSQL, SQLite / D1, Redis, Supabase]
  - label: ML / CV / Research
    items: [PyTorch, Ultralytics YOLO, OpenCV, CLIP, RAG / LangChain, uv, ruff]
  - label: Testing / Quality
    items: [Vitest, Testing Library, k6, Grafana / InfluxDB, Eslint, Biome, oxlint]
  - label: AI Engineering
    items: [Claude Code (custom skills / hooks), Codex CLI, CodeRabbit, MCP, AI code-review workflow design]
  - label: DevOps
    items: [GitHub Actions, Docker, Bun, moonrepo, dotenvx, Conventional Commits]
  - label: Environment
    items: [Linux, Neovim, zellij]
---
