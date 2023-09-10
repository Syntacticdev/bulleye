import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: "server",
    cacheDir: "./src/pages/post/[slug].astro"
});
