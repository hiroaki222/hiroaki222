---
releaseDate: "2026-08"
ongoing: false
name: koe
description: "日本語の会議録音から話者付きの文字起こしと議事録を作る CLI. 音声・文字起こし・要約のいずれも手元のマシンから出ない. 話者分離は誰が話したかを決めるだけでなく, 発話そのものの判定にも使う. Whisper は長い無音に相槌を捏造しながら no_speech_probability に 0 を返し続けるため, どの話者とも重ならないテキストを捨てて弾く. セグメント境界をまたいだマルチバイト文字は繰り越しバッファで復元. 議事録のプロンプトはほとんどが禁止事項で, テンプレートの空欄を日付・担当・期限の捏造で埋めさせない. 20 分の会議で文字起こし 28 秒・話者分離 3 秒. 2 人の通話での話者帰属は時間換算 85%, 誤りは短い相槌と素早い応酬に集中する."
descriptionEn: "A command line tool that turns a recording of a Japanese meeting into a speaker-attributed transcript and minutes. No audio, transcript or summary leaves the machine. Diarization decides not only who spoke but whether anyone did: Whisper hallucinates filler over long silences while reporting no_speech_probability = 0 throughout, so text overlapping no speaker is dropped rather than filtered on that value. Multi-byte characters split across segment boundaries are rejoined through a carry buffer. The minutes prompt is mostly prohibitions, which is what stops a model from filling the blanks in a template with invented dates, owners and deadlines. Twenty minutes of meeting: 28 seconds to transcribe, 3 to diarize. Speaker attribution runs at 85% by duration on a two-person call, with the errors gathered in short backchannels and quick exchanges."
url: https://github.com/hiroaki222/koe
category: OSS
stack: [Rust, whisper.cpp, speakrs, llama.cpp]
todo: false
---
