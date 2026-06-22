# BeatSeed Prototype

A phone-browser prototype for a collaborative loop-stacking beatmaker.

## What this version does

- Lets someone start a beat by adding loops.
- Plays selected loops together in sync using the Web Audio API.
- Stores the beat in the URL hash so the link can be shared without a backend.
- Lets the next person open the link and add another loop.

## What this version does not do yet

- No database.
- No notifications.
- No accounts.
- No true live updating of the same URL.
- No BPM stretching or key matching.

## Add your loops

Put your files here:

`audio/loops/`

Then edit `app.js` and update `LOOP_LIBRARY`.

Every loop should be:

- Same BPM.
- Same key.
- Same length in bars.
- Perfectly trimmed.
- Exported consistently, preferably mp3 for compatibility, or both mp3 and ogg later.

The placeholder names expected by default are:

- drums_01.mp3
- bass_01.mp3
- perc_01.mp3
- chord_01.mp3
- lead_01.mp3
- fx_01.mp3

## Run locally

Because browsers often block local audio fetches from `file://`, run a tiny local server:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Put online quickly

Upload the folder to Netlify, Cloudflare Pages, or GitHub Pages.
