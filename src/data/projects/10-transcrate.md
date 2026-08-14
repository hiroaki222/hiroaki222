---
releaseDate: "2026-08"
ongoing: false
name: transcrate
description: "USB に入れる曲が現場で鳴るかを出発前に確かめ, 鳴らないものだけ変換する DJ 向けツール. 判定表は Pioneer DJ / AlphaTheta 10 機種の取扱説明書から起こしたもので, コーデック・サンプルレート・ビット深度・ビットレートに加え, ファイルシステムとフォルダ構造 (8 階層・1 フォルダ 10,000 件) まで照合する. 変換先は 10 機種すべてでの再生を保証する 2 種類と保存用の 1 種類. 元より高いビットレートへの再エンコードや, 出力先が衝突する変換は拒否する. GPL 汚染を避けるため LGPL 構成の ffmpeg を macOS / Windows 向けにクロスビルドして同梱し, バンドル署名の封まで CI で検証する. Rust / Tauri 2 / React 19, CLI と GUI が同一コアを共有."
descriptionEn: "A DJ tool that answers whether the tracks on a USB stick will play in the booth, and converts only the ones that will not. The compatibility table is transcribed from the manuals of ten Pioneer DJ and AlphaTheta players, and covers the filesystem and the shape of the folder tree (eight levels, ten thousand entries per folder) alongside codec, sample rate, bit depth and bitrate. Two of the three targets guarantee playback on all ten; the third is the copy you keep. It refuses to re-encode a lossy source above the bitrate it arrived with, and refuses two conversions that would claim one destination. An LGPL ffmpeg is cross-built for macOS and Windows and shipped inside, with the bundle's code signature verified in CI. Rust / Tauri 2 / React 19, with the CLI and the window over one core."
url: https://github.com/hiroaki222/transcrate
category: OSS
todo: false
---
