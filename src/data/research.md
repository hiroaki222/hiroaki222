---
# Research summary (long-form). Rendered as paragraph text. researchEn は EN 表示用.
# NOTE: 手法の具体 (概念編集・介入・few-shot の仕組み) はペーパー投稿まで
# 非公開方針. ここにはテーマ次元の記述だけ書く.
research: |
  修士研究のテーマは **解釈可能な個人化画像美的評価 (interpretable personalized image aesthetic assessment; PIAA)**. 「良い写真」の基準は人によって違うのに, 既存の美的評価 AI は点数を返すだけで理由を語りません. 一人ひとりの好みに合わせて, なぜその評価になったのかを人が読める形で説明できるモデルを作っています. 目指している使い道は, 連写やよく似た写真の山からあなたの好みでベストの 1 枚を理由つきで選ぶ写真整理です.
  ベースにした美的評価モデル **PPA (CVPR 2026)** は, 論文だけを頼りに一から再現して原論文水準の精度 (SRCC 0.917) を出せています. 研究の土台になるデータセット **XPASS-Vis** (美術・ファッション・風景の 3 ドメイン) の構築にも第 2 著者として関わりました. データ収集用のアノテーション基盤は自分で作ったものです (Projects 参照).
researchEn: |
  My master's research is on **interpretable personalized image aesthetic assessment (PIAA)**. What makes a photo good differs from person to person, yet existing aesthetic-assessment models only return a score without explaining why. I am building models that adapt to each individual's taste and explain the reasoning behind each assessment in a human-readable form. The use case I have in mind is photo triage: picking the best shot from a pile of near-duplicates, with reasons, according to your taste.
  As groundwork, I reproduced **PPA (CVPR 2026)**, the aesthetic model my work builds on, from the paper alone and matched its reported accuracy (SRCC 0.917). I was also second author on **XPASS-Vis**, a cross-domain PIAA dataset spanning art, fashion, and scenery, and the annotation platform used to collect it is something I built myself (see Projects).
---
