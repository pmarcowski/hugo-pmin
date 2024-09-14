---
title: Home
---

[<img src="https://simpleicons.org/icons/github.svg" style="max-width:15%;min-width:40px;float:right;margin-left:10px" alt="Github repo" />](https://github.com/pmarcowski/hugo-pmin)

# PMin: a minimal Hugo theme

**PMin** is a minimal and customizable Hugo theme, optimized for [**blogdown**](https://github.com/rstudio/blogdown) websites. It supports essential features for a blog with minimal complexity. This is a stylized fork of the **XMin** theme by [Yihui Xie](https://github.com/yihui).

```bash
find . -not -path '*/exampleSite/*' \( -name '*.html' -o -name '*.css' \) | xargs wc -l
```

```
       3 ./layouts/404.html
      10 ./layouts/_default/single.html
      16 ./layouts/_default/list.html
      10 ./layouts/_default/terms.html
       0 ./layouts/partials/foot_custom.html
       0 ./layouts/partials/head_custom.html
       9 ./layouts/partials/footer.html
      19 ./layouts/partials/header.html
     102 ./static/css/style.css
       7 /static/css/fonts.css
      25 ./static/js/script.js
     201 total
```

Despite its minimalism, **PMin** is fully functional. It supports pages (including the home page), blog posts, navigation menus, categories, tags, and RSS. With minor customization, it can incorporate **LaTeX math expressions** and **syntax highlighting** with a copy button. See [About](about/) for more details.

Explore the site's content:

- [Posts](/post/)
- [Notes](/note/)

All pages not under the root directory of the website are listed below.