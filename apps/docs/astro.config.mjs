import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  integrations: [
    [tailwind()],
    starlight({
      title: "HackHubb Docs",
      social: {
        github: "https://github.com/TanishBasu2002/HackHubb",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});