---
releaseDate: "2026-08"
ongoing: false
name: review-orchestration-bench
description: "AI コードレビューの構成を比較するためのベンチマーク基盤。bug-fix コミットを逆適用して欠陥入りのコードを合成し、マルチベンダ (Anthropic / OpenAI / Google) のモデルを同じ条件で回して、コストと検出性能を測る。SIG-AGI 第 33 回研究会の論文 (Publications 参照) はこの基盤で得た結果。"
descriptionEn: "The benchmark harness behind the SIG-AGI paper (see Publications). It synthesises defective code by inverting bug-fix commits, runs models from Anthropic, OpenAI, and Google under identical conditions, and measures what each orchestration shape costs and finds."
url: https://github.com/hiroaki222/review-orchestration-bench
category: Research × Product
stack: [Python, uv, pLaTeX]
todo: false
---
