import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bulletin Agrométéorologique',
			favicon: '/images/favicon.ico',
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
				{
					label: '2022',
					autogenerate: { directory: '2022' },
				},
				{
					label: '2021',
					autogenerate: { directory: '2021' },
				},
				{
					label: '2020',
					autogenerate: { directory: '2020' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
