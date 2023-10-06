import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://astronvim.com",
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
    compress({
      CSS: true,
      HTML: { removeAttributeQuotes: false },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
