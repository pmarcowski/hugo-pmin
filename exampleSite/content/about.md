---
title: About PMin
author: Przemyslaw Marcowski
---

**PMin** is a fork of the **XMin** Hugo theme by [Yihui Xie](https://github.com/yihui), designed for simplicity and functionality. This theme supports various content types including static pages, blog posts, and shorter notes. Navigation is straightforward, with a menu at the top for main sections and dedicated pages for browsing posts and notes. **PMin** also uses categories and tags for exploration of content. 

You can easily customize the theme by editing `hugo.yaml` to change the site title, menu items, and other settings:

```yaml
menu:
  main:
    - name: Home
      url: ""
      weight: 1
    - name: About
      url: "about/"
      weight: 2
    - name: Posts
      url: "post/"
      weight: 3
    - name: Categories
      url: "categories/"
      weight: 4
    - name: Tags
      url: "tags/"
      weight: 5
    - name: Subscribe
      url: "index.xml"
```

**PMin** uses date-based permalinks for posts and notes by default. This creates URLs like 'yoursite.com/post/2023/09/07/post-title/'. You can customize this in `hugo.yaml`:

```yaml
permalinks:
  note: "/note/:year/:month/:day/:slug/"
  post: "/post/:year/:month/:day/:slug/"
```

To customize the theme layouts, edit the files in the `layouts` directory. Override `layouts/partials/head_custom.html` and `foot_custom.html` to add custom scripts or styles. For example:

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
<script src="//cdn.jsdelivr.net/combine/npm/katex/dist/katex.min.js,npm/katex/dist/contrib/auto-render.min.js,npm/@xiee/utils/js/render-katex.js" defer></script>

<script src="//cdn.jsdelivr.net/npm/@xiee/utils/js/center-img.min.js" defer></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/r.min.js"></script>

<script src="{{ "js/script.js" | relURL }}"></script>

<script>
hljs.configure({languages: []});
hljs.initHighlightingOnLoad();
</script>

{{ template "_internal/google_analytics.html" . }}
```

The page footer can be defined in `.Params.footer` with the text treated as Markdown, for example:

```yaml
params:
  footer: "&copy; [Przemyslaw Marcowski](https://przemyslawmarcowski.com) {Year}"
```

Styles can be customized in `static/css/style.css` and fonts in `static/css/fonts.css` under the root directory.

**PMin** supports LaTeX math expressions:

$$ \sigma(z)_i = \frac{e^{z_i}}{\sum_{j=1}^K e^{z_j}} $$

and syntax highlighting (with copy button):

```python
import numpy as np
import matplotlib.pyplot as plt

def softmax(z):
    exp_z = np.exp(z)
    return exp_z / np.sum(exp_z, axis=0)

z = np.linspace(-10, 10, 1000)
softmax_values = softmax(np.vstack([z, np.zeros_like(z)]))
```

