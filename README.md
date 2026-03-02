# Minimal CV for GitHub Pages

This is a single-page CV site built to be:

- **Markdown-driven**: all content lives in `content.md`.
- **Static**: works on GitHub Pages with no build step.
- **Fast + minimal**: plain HTML/CSS + a tiny JS helper to render Markdown.

You only need to edit **one file** (`content.md`) to update your CV.

---

## Files

- `index.html` – HTML shell that loads styles and renders `content.md`.
- `styles.css` – brutalist-minimal, dark-mode-first styling.
- `content.md` – your actual CV content (edit this file).
- `app.js` – tiny script that fetches `content.md` and renders it using `marked`.

---

## Editing your CV

1. Open `content.md` in your editor.
2. Keep the existing **section order**:
   - `# Name`
   - One-line role/location line under the H1
   - `## About`
   - `## Work Experience`
   - `## Skills` (with `### Frontend`, `### Backend`, `### Tools`)
   - `## Projects`
   - `## Contact`
3. Replace the placeholder text with your own details.
4. Save the file and refresh the browser (see preview below).

You do **not** need to touch `index.html`, `styles.css`, or `app.js` for normal edits.

---

## Local preview (see it in the browser)

From the project root (`cv` directory), run a simple static server.

If you have Python 3:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Every time you edit and save `content.md`, refresh the page in the browser to see your changes.

---

## Deploying to GitHub Pages

1. Create a new GitHub repository (for example: `cv`).
2. Add these files and push them to the **default branch** (usually `main`).
3. In the repository on GitHub:
   - Go to **Settings → Pages**.
   - Under **Source**, select:
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Click **Save**.
4. After a short build, your site will be available at the URL GitHub shows (for example `https://username.github.io/cv/`).

Updates are simple:

1. Edit `content.md`.
2. Commit and push to `main`.
3. GitHub Pages will automatically serve the new version.

---

## Notes on performance & privacy

- No analytics, cookies, or trackers.
- No custom fonts or images, so the page loads quickly, even on slow connections.
- Only one small external dependency (`marked` via CDN) + a tiny `app.js` file.

