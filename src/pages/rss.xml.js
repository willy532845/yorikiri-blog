import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import config from "@shConfig";
import { withBase } from "../lib/url";

export async function GET(context) {
  // RSS feed 只顯示非 draft 文章
  const posts = await getCollection("blog", ({ data }) => data.draft !== true);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: new URL(withBase("/"), context.site),
    items: posts.map((post) => ({
      ...post.data,
      link: withBase(`/blog/${post.id}/`),
      enclosure: post.data.heroImage
        ? {
            url: new URL(withBase(post.data.heroImage.src), context.site).href,
            type: "image/jpeg", // 或根據你的圖檔格式調整
            length: 0,
          }
        : undefined,
      content: config.behavior.rss.protectContent
        ? post.body.slice(0, 50) + (post.body.length > 50 ? "..." : "")
        : post.body,
    })),
    customData: `<atom:link href="${new URL(withBase("/rss.xml"), context.site)}" rel="self" type="application/rss+xml" />`,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    stylesheet: config.behavior.rss.enableStylesheet
      ? withBase("/rss/styles.xsl")
      : undefined,
  });
}
