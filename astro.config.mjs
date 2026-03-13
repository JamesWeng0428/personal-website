// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// TODO: Replace 'your-github-username' with your actual GitHub username
export default defineConfig({
	site: 'https://JamesWeng0428.github.io',
	integrations: [mdx(), sitemap()],
});
