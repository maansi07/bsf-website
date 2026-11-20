# Baptist Sports Foundation website

Static site (HTML, CSS, JS). No build step.

## Photos
All photos are already in `images/` (about 4.6 MB). Gallery photos are `g01.jpg` to `g28.jpg`; each one is listed in `index.html` inside the `<div class="mosaic">` block, where you can change its category (`data-c`) and its description (`alt`).
To add more: save a resized jpg (about 1000px wide) in `images/`, then copy one of the `<button class="g">` lines. Categories: `t` tournaments, `c` chess, `a` athletes and awards, `m` community.

## Publish on GitHub Pages
1. Create a new repo, e.g. `baptist-sports-foundation`, and upload all files in this folder.
2. Repo > Settings > Pages > Source: "Deploy from a branch" > branch `main`, folder `/ (root)` > Save.
3. After a minute the site is live at `https://<your-username>.github.io/baptist-sports-foundation/`.
4. In your other project, add a link to that URL.

## Edit content
All text lives in `index.html`. Colours are the variables at the top of `style.css`.
