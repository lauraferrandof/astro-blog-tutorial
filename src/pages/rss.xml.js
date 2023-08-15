import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Awesome Astro Blog Tutorial",
    description: "My journey learning Astro",
    site: "https://awesome-astro-blog-tutorial.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
