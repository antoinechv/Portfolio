import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import { wpquery } from "./src/graphql/wordPressQuery.ts";

async function getPhotoIds() {
  const data = await wpquery({
    query: `
      {
        photos {
          nodes {
            id
          }
        }
      }
    `,
  });

  return data.photos.nodes.map((photoNode) => photoNode.id);
}

async function getVideoIds() {
  const data = await wpquery({
    query: `
      {
        videos {
          nodes {
            id
          }
        }
      }
    `,
  });

  return data.videos.nodes.map((videoNode) => videoNode.id);
}

async function getProjectIds() {
  const data = await wpquery({
    query: `
      {
        projects {
          nodes {
            id
          }
        }
      }
    `,
  });

  return data.projects.nodes.map((projectNode) => projectNode.id);
}

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  build: {
    generatePages: async () => {
      const photoIds = await getPhotoIds();
      const videoIds = await getVideoIds();
      const projectIds = await getProjectIds();

      const photoPages = photoIds.map((id) => ({
        path: `/pictures/${id}`,
        component: "./src/pages/pictures/[id].astro",
        params: { id },
      }));

      const videoPages = videoIds.map((id) => ({
        path: `/videos/${id}`,
        component: "./src/pages/videos/[id].astro",
        params: { id },
      }));

      const projectPages = projectIds.map((id) => ({
        path: `/projects/${id}`,
        component: "./src/pages/projects/[id].astro",
        params: { id },
      }));

      return [...photoPages, ...videoPages, ...projectPages];
    },
  },
});
