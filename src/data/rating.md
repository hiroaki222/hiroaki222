---
# /rating ページ (EAFC 選手レート風) の詳細データ.
# 6 軸の本体スコアは skills.md の assessment を参照し, ここはその内訳
# (サブスタッツ) と PlayStyles・ポジション等の演出データを持つ.
#
# スコアの出どころ: 2026-07 に AI エージェント 4 体 (個人 Web/TS 系, 個人
# Python/ML 系, 勤務先 org, 開発環境系に分担) が全 GitHub repo (private 含む)
# の本人コミットを分析して導出. 各スコアの根拠は why (日) / whyEn (英) に記載し,
# /rating ページではサブスタッツの hover ツールチップとして表示される.
# スコア感: 90+ = Expert / 80 台 = 実運用で反復した主力領域 / 70 台 = Proficient
# / 60 以下 = 明確な弱点.
rating:
  # main が先頭. FS = Full-Stack, INF = Infrastructure, MLR = ML/Research,
  # REF = Referee (JFA 公認審判員 4級を実際に保有 — meta.md の licences 参照).
  positions: [FS, INF, MLR, REF]
  # Skill Moves = 新技術キャッチアップ (React 19 / TanStack Start / Tailwind v4 を
  # リリース直後に実戦投入). Weak Foot はリアルの逆足 (本人申告: 下手).
  skillMoves: 5
  weakFoot: 1
  playstyles:
    - label: AI Workflow Architect
      ja: チームの AI レビュー基盤 (CodeRabbit / Claude Code hooks) を設計・運用
      en: Designs and operates the team's AI review infrastructure (CodeRabbit / Claude Code hooks)
    - label: Security-First
      ja: 認可バグの自発的発見・体系的なセキュリティ強化を反復
      en: Proactively uncovers authorization bugs; repeats systematic security hardening
    - label: Geo Full-Stack
      ja: PostGIS → タイルパイプライン → WebGL 描画まで地理空間の全層を所有
      en: Owns the entire geospatial stack — PostGIS, tile pipelines, WebGL rendering
    - label: Early Adopter
      ja: 最新世代のフレームワークをリリース直後に実戦投入
      en: Ships latest-generation frameworks in production right after release
    - label: Solo Shipper
      ja: 認証・DB・IaC・CI/CD まで単独で E2E 構築 (主要 repo 寄与 97 / 100 / 80%)
      en: Builds products E2E solo — auth, DB, IaC, CI/CD (97 / 100 / 80% of commits in key repos)
  subStats:
    - key: INF
      items:
        - label: Serverless Architecture
          score: 90
          why: CF (Workers/D1/R2/Durable Objects) + AWS (Lambda/Aurora Serverless v2) + GCP (Cloud Run) の 3 クラウド serverless 構成を単独で設計・実運用
          whyEn: Designed and operates serverless architectures across 3 clouds solo — CF (Workers/D1/R2/DO) + AWS (Lambda/Aurora Serverless v2) + GCP (Cloud Run)
        - label: IaC (SST / Wrangler)
          score: 88
          why: SST v4 で AWS 全リソースを IaC 化, Wrangler で CF 管理. bastion トンネル経由の migration など運用系まで整備
          whyEn: All AWS resources as code via SST v4, CF via Wrangler; operational tooling incl. migrations through a bastion tunnel
        - label: CI/CD Pipelines
          score: 88
          why: production/staging/demo/develop 4 環境への path-filtered な branch→環境マッピング CI/CD を GHA で自作. Vercel の prod/preview 分離も
          whyEn: Hand-built GHA pipelines mapping branches to 4 environments with path filtering; separate Vercel prod/preview flows
        - label: Cloud Security (OIDC / VPC)
          score: 86
          why: OIDC deploy で静的キー排除, VPC endpoint で NAT 排除. 組織スコープ認可バグの自発的発見・修正コミットが複数
          whyEn: OIDC deploys eliminating static keys, VPC endpoints eliminating NAT; multiple self-initiated org-scope authz fixes
        - label: Cost Optimization
          score: 84
          why: 環境別の scale-to-0 / always-warm 使い分けなどコスト意識のある構成判断がコミットから読める
          whyEn: Cost-aware choices visible in commits, e.g. scale-to-0 vs always-warm per environment
        - label: Docker
          score: 82
          why: 2023 年から 2 年間 6 スタック分の Dockerfile + Cloud Run への Docker デプロイ. 高度なイメージ最適化の証拠は薄め
          whyEn: 2 years of Dockerfiles across 6 stacks since 2023 + Docker deploys to Cloud Run; little evidence of advanced image optimization
    - key: FRO
      items:
        - label: React
          score: 90
          why: React 19 を複数 repo で実運用 (RSC / server functions / hooks が一貫して idiomatic). 個人+勤務先で計 2,000 コミット超の主戦場
          whyEn: React 19 in production across repos with consistently idiomatic RSC / server functions / hooks; 2,000+ commits combined
        - label: Meta-frameworks
          score: 88
          why: TanStack Start を 4 repo で実運用 + Next.js App Router 3 世代 (13/14/15) + React Router v7. リリース直後の実戦投入を反復
          whyEn: TanStack Start in 4 production repos + 3 generations of Next.js App Router + React Router v7, repeatedly adopted right after release
        - label: GIS / WebGL Rendering
          score: 87
          why: MapLibre GL / deck.gl / PMTiles を 4 repo で反復. WebGL クラスタリング, 認証付き Range 対応タイル proxy まで自作
          whyEn: MapLibre GL / deck.gl / PMTiles across 4 repos; WebGL clustering and a hand-built authenticated range-request tile proxy
        - label: Styling (Tailwind / shadcn)
          score: 85
          why: Tailwind (v4 含む) を全期通して常用 + shadcn/Radix ベースの合成
          whyEn: Tailwind (incl. v4) throughout + composition on shadcn/Radix
        - label: Forms & Validation
          score: 82
          why: react-hook-form + valibot/zod. チーム repo では厳格だが個人 repo の一部にバリデーション未導入のムラ
          whyEn: react-hook-form + valibot/zod; strict in team repos but inconsistent in some personal repos
        - label: Accessibility
          score: 77
          why: 68 → 77 (再検証). 手書き ARIA 計 ~215 箇所・img alt / form label ほぼ全数・Radix の暗黙担保を初回評価が見落とし. ただし prefers-reduced-motion / a11y lint・CI は全 repo で皆無のため 80 台には非到達
          whyEn: Revised 68 → 77 — initial pass missed ~215 hand-written ARIA attrs, near-total alt/label coverage and Radix's implicit guarantees; still no reduced-motion, a11y linting or CI checks anywhere
    - key: BCK
      items:
        - label: Security Hardening
          score: 88
          why: パストラバーサル allowlist・LIKE メタ文字エスケープ・CSP 適用などを横断的に一括対処. 認可バグの自発的発見・修正も複数
          whyEn: Systematic sweeps — path-traversal allowlists, LIKE metacharacter escaping, CSP; multiple self-found authz fixes
        - label: Auth Systems
          score: 87
          why: Better Auth (組織/ロール/impersonation) ×3 repo, NextAuth+LDAP, Supabase Auth, Firebase Auth, 自前 HMAC 署名 cookie の計 5 方式を実装
          whyEn: 5 auth stacks implemented — Better Auth (orgs/roles/impersonation) ×3 repos, NextAuth+LDAP, Supabase Auth, Firebase Auth, hand-rolled HMAC-signed cookies
        - label: API Design (Hono / FastAPI)
          score: 85
          why: Hono (Lambda / Workers 両ランタイム) + FastAPI (CV 推論 API) の 2 系統を実運用
          whyEn: Two production stacks — Hono on both Lambda and Workers, FastAPI serving CV inference
        - label: ORM / Query (Drizzle / Prisma)
          score: 84
          why: Drizzle 中心 + Prisma (Aurora). ORM と生 SQL の境界を文書化して運用 (PostGIS generated column は Prisma 外で処理)
          whyEn: Drizzle-first + Prisma on Aurora; documented ORM vs raw-SQL boundary (PostGIS generated columns handled outside Prisma)
        - label: Type-sharing (OpenAPI - TS)
          score: 84
          why: FastAPI の OpenAPI スキーマから CI で TS 型を自動生成する Python↔TS 型共有ブリッジを構築
          whyEn: Built a Python↔TS bridge auto-generating TS types from FastAPI's OpenAPI schema in CI
        - label: Idempotency / Reliability
          score: 80
          why: Lambda の at-least-once 前提の冪等性キー設計, presigned URL アップロードフロー
          whyEn: Idempotency-key design for Lambda's at-least-once delivery; presigned-URL upload flows
    - key: DAT
      items:
        - label: Migration Engineering
          score: 88
          why: 計 59 migration. SQLite の ALTER TABLE 制約を理解したテーブル再作成パターン + PRAGMA 制御 + 理由コメント付きの質の高い運用
          whyEn: 59 migrations total; table-rebuild patterns aware of SQLite's ALTER TABLE limits, PRAGMA control, reasons documented inline
        - label: Geospatial (PostGIS + GiST)
          score: 86
          why: PostGIS geography 型 + GiST 空間インデックス + generated column 運用
          whyEn: PostGIS geography types + GiST spatial indexes + generated-column workflows
        - label: SQLite / D1
          score: 85
          why: D1 で 42 migration. エンジン制約への深い理解が migration 設計に表れる
          whyEn: 42 migrations on D1; engine-constraint awareness shows in migration design
        - label: PostgreSQL
          score: 83
          why: Aurora PostgreSQL (Serverless v2) で 17 migration. ランキング非正規化・soft-delete などの設計判断
          whyEn: 17 migrations on Aurora PostgreSQL (Serverless v2); design calls like ranking denormalization and soft-delete
        - label: Data Pipelines (tippecanoe)
          score: 82
          why: CSV → tippecanoe → pmtiles の大規模静的地理データパイプラインを自作
          whyEn: Hand-built large-scale static geodata pipeline — CSV → tippecanoe → pmtiles
        - label: Caching (Redis / LRU)
          score: 78
          why: ElastiCache (Valkey) / ioredis / Upstash + フロント側 LRU cache・debounce の改善. 高度なキャッシュ戦略の証拠は薄め
          whyEn: ElastiCache (Valkey) / ioredis / Upstash + frontend LRU cache and debounce work; little evidence of advanced cache strategy
    - key: PRC
      items:
        - label: Commit / PR Discipline
          score: 90
          why: Conventional Commits を全 repo で一貫. ソロ開発 repo でも 160 PR のブランチ/PR 運用を崩さない
          whyEn: Conventional Commits everywhere; 160 PRs of branch/PR discipline even in solo repos
        - label: Org Conventions Authoring
          score: 88
          why: org の .github repo (コミットの 96% が本人) で CONTRIBUTING・規約・テンプレート・release-drafter を入社初期からゼロから単独制定
          whyEn: Authored the org's .github repo (96% of commits) — CONTRIBUTING, conventions, templates, release-drafter — solo from day one
        - label: Documentation (ADR / DESIGN)
          score: 80
          why: DESIGN.md によるアーキテクチャ文書化, ADR による技術意思決定の記録, 日英併記 README
          whyEn: Architecture in DESIGN.md, decisions in ADRs, bilingual READMEs
        - label: Load Testing (k6 / Grafana)
          score: 78
          why: k6 + InfluxDB/Grafana の負荷試験基盤とレースコンディション検証マトリクスを自作
          whyEn: Hand-built k6 + InfluxDB/Grafana load-testing rig and a race-condition verification matrix
        - label: CI Quality Gates
          score: 72
          why: 主要 repo に CI はあるが quality gate (カバレッジ閾値等) は薄く, 個人 Python/ML 系 repo は CI 自体が無い
          whyEn: CI exists in key repos but quality gates are thin; personal Python/ML repos have no CI at all
        - label: Automated Testing
          score: 70
          why: 歴史的に手薄 (個人 repo はテスト 1 本以下が大半). ただし最新の勤務先 repo はテスト 109 ファイルまで改善しており上昇傾向
          whyEn: Historically thin (most personal repos have ≤1 test), but trending up — latest work repo has 109 test files
    - key: MLR
      items:
        - label: CV Pipelines (YOLO / Tracking)
          score: 82
          why: YOLOv8 の検出 + トラッキング推論パイプラインと学習・評価スクリプトの両方を単独所有. track ID ごとの best-shot 選定, 多段評価設計
          whyEn: Sole owner of YOLOv8 detection + tracking inference plus training/eval scripts; per-track best-shot selection, multi-stage evaluation
        - label: Modern Tooling (uv / ruff)
          score: 82
          why: rye → uv 移行を約 8 repo で一貫, ruff, src-layout + hatchling が定着
          whyEn: Consistent rye → uv migration across ~8 repos; ruff, src-layout + hatchling as standard
        - label: PyTorch
          score: 80
          why: 美的評価モデルの再現 (SRCC 0.917) + カスタム RL 環境 + Transformer 実装演習の積み上げ
          whyEn: Reproduced an aesthetic-assessment model (SRCC 0.917) + custom RL environment + Transformer implementation practice
        - label: CS Foundations
          score: 80
          why: 簡易言語インタプリタ (トークナイザ/パーサ/スタックマシン) や DFS/BFS 木構造探索の実装で CS 基礎を裏付け
          whyEn: Backed by a small language interpreter (tokenizer/parser/stack machine) and DFS/BFS tree-search implementations
        - label: Research Reproduction
          score: 78
          why: 論文再現実装を 2 日間で, uv/ruff + Conventional Commits を伴う高い完成度で仕上げた実績
          whyEn: Reproduced a paper implementation in 2 days at high polish, with uv/ruff and Conventional Commits
        - label: Experiment Management
          score: 58
          why: wandb / mlflow 等の実験管理基盤が全 repo で皆無. 明確な伸びしろ
          whyEn: No experiment tracking (wandb/mlflow etc.) in any repo — the clearest growth area
---
