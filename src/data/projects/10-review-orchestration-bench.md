---
releaseDate: "2026-08"
ongoing: false
name: review-orchestration-bench
description: "JSAI SIG-AGI 第 33 回研究会 (筆頭著者). AI コードレビューのオーケストレーション構成 (単一 / 観点別並列 / 反証型 / 反復実行集約) を 12 モデル × 4 構成 × 30 項目 = 1440 combos で実測し，コスト-性能のパレート分析を報告. GPT-5 mini + Multi-run が F2=0.826 で最良となり，廉価モデル + Multi-run が上位価格帯モデルを上回ることを実証. Anthropic / OpenAI / Google 対応の LLM ハーネスと bug-fix コミット逆適用によるベンチマーク合成手法を同梱. Python, uv, pLaTeX."
descriptionEn: "JSAI SIG-AGI 33rd meeting (first author). Cost-vs-performance Pareto analysis of AI code review orchestration configurations (single, parallel-aspect, adversarial, multi-run aggregation) across 12 models × 4 configs × 30 items = 1440 combos. GPT-5 mini + Multi-run wins at F2=0.826, and cheap models with Multi-run outperform premium single-shot selection. Ships with a multi-vendor LLM harness (Anthropic / OpenAI / Google) and a bug-fix commit inversion pipeline for benchmark synthesis. Python, uv, pLaTeX."
url: https://github.com/hiroaki222/review-orchestration-bench
category: Research × Product
stack: [Python, uv, pLaTeX]
todo: false
---
