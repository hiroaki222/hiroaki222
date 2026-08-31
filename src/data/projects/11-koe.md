---
releaseDate: "2026-08"
ongoing: false
name: koe
description: "日本語の会議録音から, 誰が何を話したかを起こして議事録にする CLI. 音声も文字起こしも要約も手元のマシンから出ない. 話者分離は文字起こしの土台であると同時に発話の判定にも使っている — Whisper は長い無音に相槌を捏造しながら no_speech_probability に 0 を返し続けるため, その値では弾けず, どの話者とも重ならないテキストを捨てる形にした. セグメント境界をまたいだマルチバイト文字は繰り越しバッファで復元する. 議事録のプロンプトはほとんどが禁止事項で, テンプレートの空欄を埋めようとして日付や担当を捏造するのを抑えている. 20 分の会議で文字起こし 28 秒, 話者分離 3 秒. 2 人の通話における話者の帰属は時間換算 85% で, 誤りは短い相槌と素早い応酬に集中する."
descriptionEn: "A command line tool that turns a recording of a Japanese meeting into a speaker-attributed transcript and minutes. No audio, transcript or summary leaves the machine. Diarization does double duty as the speech gate: Whisper hallucinates filler over long silences while reporting no_speech_probability = 0 throughout, so that field cannot filter it, and text overlapping no speaker is dropped instead. Multi-byte characters split across segment boundaries are rejoined through a carry buffer. The minutes prompt is mostly prohibitions, holding back a model that would otherwise invent dates and owners to fill a template. Twenty minutes of meeting takes 28 seconds to transcribe and 3 to diarize. Speaker attribution runs at 85% by duration on a two-person call, and the errors gather in short backchannels and quick exchanges."
url: https://github.com/hiroaki222/koe
category: OSS
stack: [Rust, whisper.cpp, speakrs, llama.cpp]
todo: false
---
