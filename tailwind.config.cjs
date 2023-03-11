/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: 'hsl(var(--color-primary-100) / <alpha-value>)',
					200: 'hsl(var(--color-primary-200) / <alpha-value>)',
					300: 'hsl(var(--color-primary-300) / <alpha-value>)',
					400: 'hsl(var(--color-primary-400) / <alpha-value>)',
					500: 'hsl(var(--color-primary-500) / <alpha-value>)',
					600: 'hsl(var(--color-primary-600) / <alpha-value>)',
					700: 'hsl(var(--color-primary-700) / <alpha-value>)',
					800: 'hsl(var(--color-primary-800) / <alpha-value>)',
					900: 'hsl(var(--color-primary-900) / <alpha-value>)',
				}
			}
		},
	},
	plugins: [],
}
