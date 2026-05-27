# AGENTS.md

## Cursor Cloud specific instructions

This is a single-file static HTML/CSS/JS website (`index.html`). There is no build step, no package manager, no backend, no database, and no external dependencies (aside from Google Fonts loaded via CDN).

### Running the site

Serve the file with any static HTTP server. For example:

```sh
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/index.html` in a browser.

### Lint / Test / Build

- There are no linters, test frameworks, or build tools configured in this repository.
- To validate the HTML, use an external HTML validator or browser dev tools.
- All interactive features (quiz, love letter envelope, bucket list checkboxes, counters) run entirely client-side in vanilla JS with no dependencies.
