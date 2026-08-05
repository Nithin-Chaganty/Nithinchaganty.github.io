# Portfolio site

Dark, Inter-based portfolio and blog. Plain HTML/CSS/JS — no build step, no framework.

## Files

| File | What it is |
|---|---|
| `index.html` | Home — hero, featured post, full feed |
| `projects.html` | ML / data science projects, with tag filters |
| `writing.html` | Personal essays and notes |
| `school.html` | Education timeline + coursework projects |
| `about.html` | Bio, skills, contact |
| `post.html` | **Template.** Copy this for every new post |
| `style.css` | All styling — colors and fonts live at the top |
| `script.js` | Mobile nav, subscribe modal, tag filtering |
| `images/` | Put your post thumbnails and photos here |

Delete `build_pages.py` before uploading — it was only used to generate the section pages.

## Deploy to GitHub Pages

1. Create a public repo named exactly `yourusername.github.io`
2. Upload every file above (**Add file → Upload files**, drag them all in, commit)
3. **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main`, folder `/ (root)` → Save
4. Live at `https://yourusername.github.io` in 1–2 minutes

## Adding a new post

1. Copy `post.html` → `my-new-post.html`
2. Edit the title, eyebrow (category), date, and body
3. Add a card linking to it. Open `index.html`, copy any `<article class="post-card">` block, paste it at the top of `<div class="feed">`, and update the title, excerpt, date, image, and `href`
4. Repeat on the relevant section page (`projects.html`, `writing.html`, or `school.html`) — those cards also need a `data-tags="..."` value matching one of the filter chips
5. Drop the thumbnail in `images/`

Thumbnails look best at 1200×675 (16:9). If an image is missing, the card shows a quiet placeholder instead of breaking.

## Turning on the subscribe button

The form is wired but needs a free backend. Easiest options:

**Formspree** (simplest — collects emails, you send updates manually)
1. Sign up at formspree.io, create a form, copy your form ID
2. Find `YOUR_FORM_ID` in every HTML file and replace it

**Buttondown or Substack** (real newsletter — send actual emails)
1. Sign up, find your embed/form action URL
2. Replace the whole `<form action="...">` line with theirs

Until you do one of these, the button opens the modal but submissions go nowhere.

## Changing colors and fonts

Everything is at the top of `style.css`:

```css
:root{
  --bg:#131313;
  --text:#FFFFFF;
  --accent:#7FD8C4;
  --font:'Inter', ...;
}
```

To change the font, edit `--font` and update the Google Fonts `<link>` in each HTML `<head>`.

## Placeholders to replace

Search across all files for:
- `Your Name`
- `yourusername` — GitHub, LinkedIn, Tableau links
- `you@example.com`
- `YOUR_FORM_ID`
- Every post title, excerpt, and date
- `resume.pdf` — add the actual file to the repo root
