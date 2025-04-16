// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://astronvim.com",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: true,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],
});

