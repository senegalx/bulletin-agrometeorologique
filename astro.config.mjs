import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bulletin Agrométéorologique',
			logo: {
				src: './src/assets/logo.png',
			},
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'À propos', link: '/a-propos/'
				},
				{
					label: '2023',
					autogenerate: { directory: '2023' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
