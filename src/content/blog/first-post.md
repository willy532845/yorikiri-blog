---
title: 開始撰寫文章
description: SHBlog Next 是一個基於 Astro 的部落格主題，讓你可以輕鬆地撰寫和發布文章。以下是一些關於如何開始撰寫文章的指南。
pubDate: 2022-07-08T04:00:00.000Z
heroImage: ../../assets/blog-placeholder-3.jpg
category: ["範例分類"]
draft: false
tags:
  - 範例標籤1
---

SHBlog Next 是一個基於 Astro 的部落格主題，讓你可以輕鬆地撰寫和發布文章。以下是一些關於如何開始撰寫文章的指南。

## 編輯你的第一篇文章

你可以使用任何你喜歡的 Markdown 編輯器來撰寫文章。建議使用支援 Markdown 語法高亮和預覽功能的編輯器，例如 Visual Studio Code、Typora 或 Obsidian。

如果你使用的是 Visual Studio Code，強烈推薦你可以安裝 [Front Matter CMS](https://frontmatter.codes/) 外掛來協助你編輯文章的 frontmatter 部分，讓你更方便地管理文章的 metadata。

## 建立一篇草稿文章

如果你想先撰寫一篇草稿文章，可以在 `src/content/blog/` 目錄下創建一個新的 Markdown 文件，例如 `draft-example.md`，並在 frontmatter 中設置 `draft: true`。這樣這篇文章就只會在開發環境中可見，不會被編譯到生產環境中。

```diff "draft: true"
---
title: 這是一篇草稿文章
description: 這篇文章只在開發環境可見
+ draft: true
---

你可以開始在這裡寫文章了
```

## Markdown 語法

SHBlog Next 支援標準的 Markdown 語法，讓你可以輕鬆地格式化你的文章內容。需要更多資訊，你可以閱讀預設文章之中的「範例文章」，另外你也可以參考 [Markdown 語法指南](https://www.markdownguide.org/basic-syntax/) 來了解更多 Markdown 的使用方法。

## 發布文章

當你完成文章的撰寫後，只需要將 Markdown 文件保存到 `src/content/blog/` 目錄下，SHBlog Next 就會自動識別並編譯你的文章。你可以使用 `nr dev` 命令在本地預覽你的文章，確保一切看起來都符合你的預期。當你準備好發布文章時，只需要使用 `nr build` 命令來編譯你的網站，然後使用 `nr preview` 來預覽生產環境的效果。

需要部署到線上嗎？你可以將編譯後的網站部署到任何靜態網站托管服務，例如 [Netlify](https://www.netlify.com)、[Vercel](https://vercel.com) 或 [GitHub Pages](https://pages.github.com)。順帶一提，我們最推薦的是 [Cloudflare Pages](https://pages.cloudflare.com/)，因為它提供了免費的 SSL、CDN 和無限的帶寬，非常適合部署 SHBlog Next 這樣的靜態網站。
