# Waveform Manual Style Guide

Every prompt, skill or person writing manual chapters follows this file. When a prompt and this file disagree, this file wins.

## Voice

- Talk to the reader as "you". Keep it plain and friendly, the way an experienced user would explain something to a colleague.
- Don't write in the first person ("I prefer…", "I usually…"). To recommend something, say so directly: "Leaving this on suits most setups."
- Say what a control does, and when you would change it. Skip anything the reader can already see on screen.
- Keep paragraphs short, two to four sentences.
- Use British spelling: colour, behaviour, analyse.

## Punctuation

- Don't use em dashes (—), en dashes (–) or ` -- `.
  - Inside a sentence, use a comma, colon, brackets or a full stop instead.
  - For ranges, use a plain hyphen: `4-8`, `-14 to 0 dB`.
- Control and definition lines use a colon:
  `**Control Name**: What it does and when to change it. (Default: value)`
  `**Control Name** (Choices: A, B, C): What it does. (Default: A)`

## Words and patterns to avoid

- **Marketing words:** seamless, effortless, powerful, robust, versatile, intuitive, comprehensive, streamline, unlock (except for licensing), elevate, harness, empower, game-changer, "take X to the next level", "tremendous creative potential".
- **Filler openers:** "Whether you're a … or a …", "It's worth noting", "Simply …", "In this chapter you'll learn", "Let's …".
- **Recap endings:** closing paragraphs that list what the chapter just covered.
- **Reflexive threes:** lists of three used only for rhythm.
- **Label lists:** strings of parallel bold-label bullets where a sentence or a table would read better.
- **Vague advice:** "experiment to find what works for you" and similar lines with no Waveform-specific content.

## Chapter structure

- H1 title, then an opening of one to three sentences.
- Pro gating: if the feature isn't in the Free edition, put the Pro badge on the heading and an edition note under the title (see "Edition gating" below).
- H2/H3 sections with plain-English headings.
- Callouts: `> 💡 **Tip:**`, `> 📝 **Note:**`, `> ⚠️ **Warning:**` (use Warning only rarely).
- `## ⚡ Things to Watch Out For` is welcome, but only when it earns its place: real gotchas, edge cases and surprises. Never restate a Note, Tip or paragraph from earlier in the chapter. Leave the section out if there is nothing new to add.
- `## Moving On` is optional. Keep it to one or two sentences pointing to related chapters, not a summary.

## Edition gating

- Any feature that isn't in the Free edition gets the badge on its heading: `## Faceplates <span class="pro">PRO</span>` (the `.pro` style lives in `docs/stylesheets/extra.css`).
- Directly under the title, add one line naming the editions and expansions that unlock it.
- Wording matches the product names: Waveform Pro, the MIDI Producer Expansion, and so on.

## Facts and sources

- Every label, menu path, range and default must match the code. Labels come from `TRANS()` / `NEEDS_TRANS()`.
- Menu paths use `>`, for example `Settings > General`. Show shortcuts for both platforms, Mac first: `Cmd + Z / Ctrl + Z`.
- Don't mention version numbers ("new in Waveform 13", "T7") outside `whats-new.md`.
- Put code citations in the verification output or report, never in the chapter. Chapters must not contain `<!-- code: -->` comments.

## Self-check before returning

Run these checks on the file and fix every hit:

```
grep -nE '—|–| -- ' <file>
grep -niE "seamless|effortless|powerful|robust|versatile|intuitive|comprehensive|streamline|next level|whether you're|it's worth noting|\bI (prefer|usually|find|recommend|'d)\b" <file>
grep -n '<!-- code' <file>
```
