# Qi Wang — Academic Homepage

Four-page static academic site, ready for GitHub Pages. No build tools required.

## Pages
| File | URL |
|---|---|
| `index.html` | About |
| `publications.html` | Publications |
| `books.html` | Books |
| `teaching.html` | Teaching (with slide download links) |

## Deploy to GitHub Pages

```bash
# 1. Init git and push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main

# 2. Go to GitHub → Settings → Pages → Source: GitHub Actions
# Your site will be live at: https://YOUR_USERNAME.github.io/REPO_NAME/
```

## Add course slides (Teaching page)

Open `teaching.html` and find the `<ul class="slide-list">` section.
Each slide item looks like this:

```html
<li class="slide-item">
  <div class="slide-left">
    <i class="fas fa-file-powerpoint slide-icon"></i>
    <div class="slide-info">
      <div class="slide-title">Chapter 1 — Title Here</div>
      <div class="slide-meta">第一章 · 中文标题</div>
    </div>
  </div>
  <a href="YOUR_LINK_HERE" class="slide-download">
    <i class="fas fa-download"></i> Download
  </a>
</li>
```

Replace `YOUR_LINK_HERE` with:
- A GitHub raw file URL: `https://raw.githubusercontent.com/user/repo/main/slides/ch1.pdf`
- A Google Drive share link (set sharing to "Anyone with the link")
- Any public download URL

## Add profile photo

Place photo as `assets/img/avatar.jpg`, then in `index.html` replace:
```html
<i class="fas fa-user"></i>
```
with:
```html
<img src="assets/img/avatar.jpg" alt="Qi Wang">
```

## Add publications

In `publications.html`, copy a `.pub-card` block and update the content.

## Add books

In `books.html`, copy a `.book-card` block and update the content.
