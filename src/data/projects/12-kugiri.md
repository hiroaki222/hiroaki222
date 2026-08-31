---
releaseDate: "2026-08"
ongoing: false
name: kugiri
description: "長い文章を一目で読める大きさに区切り, 1 枚ずつ表示する読書ツール. 行を左から右へ追う代わりに, 視線を一箇所に置いたまま読み進める. 分割は BudouX の文節分割の上に slack² を最小化する動的計画法を重ねたもので, 文の切り出し・URL やメールアドレスの保護・長すぎる文節の二次分割は自前で実装した. 辞書を持たない以上「漢字の後で切る」という一般規則と「取り扱うを割らない」は両立しないので, 一般規則のほうを捨てている. カードが幅に収まることは推定ではなく配置後の DOM 実測で保証し, 収まらない 1 トークンは縮小せず横スクロール領域に隔離する. 5 万字の論文で 114ms, 句点の無い 7.3 万字の最悪ケースで 143ms. 書記素数を累積索引にすることが効き, 候補ごとに Intl.Segmenter を回す実装より 6 倍速い. 4 画面幅 × 5 設定の 896 枚を検査して溢れ 0 件. RSVP の弱点である読み返しは, 文末の全文表示・停止時に出る前後 20 文・文と段落単位のジャンプ・長押しの巻き戻しで埋めている. 分割にサーバーは使わない."
descriptionEn: "A reading tool that cuts long text into pieces small enough to take in at a glance and shows them one at a time, so the eye stays in one place instead of travelling along a line. Segmentation is BudouX phrase splitting under dynamic programming that minimises squared slack; sentence boundaries, protected spans for URLs and addresses, and the secondary splitting of phrases that came out too long are all written here. Without a dictionary, the general rule \"break after kanji\" and the expectation that 取り扱う stays whole cannot both hold, so the general rule is the one that goes. That a card fits is guaranteed by measuring the placed DOM rather than by the estimate that chose it; the single token that still does not fit is isolated in a scrolling region rather than shrunk. A fifty-thousand-character paper packs in 114ms, and the worst case — seventy-three thousand characters without a full stop — in 143ms. Indexing grapheme counts once is what bought that: six times faster than running Intl.Segmenter per candidate. Eight hundred and ninety-six cards across four viewports and five settings, none overflowing. What RSVP takes away is the ability to look back, which is returned as the whole sentence at its end, the twenty sentences either side on a pause, jumps by sentence and paragraph, and a held key that rewinds. Nothing is sent to a server to be split."
url: https://github.com/hiroaki222/kugiri
deployUrl: https://kugiri.hiroaki222.com
category: Product
stack: [TypeScript, React 19, BudouX, Cloudflare Workers]
todo: false
---
