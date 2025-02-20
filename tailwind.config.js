/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  './src/**/*.{html,js,svelte,ts}',
	  './node_modules/shadcn-svelte/**/*.{js,svelte,ts}'
	],
	theme: {
	  extend: {
		borderColor: {
		  DEFAULT: 'hsl(var(--border) / <alpha-value>)'
		},
		backgroundColor: {
		  DEFAULT: 'hsl(var(--background) / <alpha-value>)'
		},
		textColor: {
		  DEFAULT: 'hsl(var(--foreground) / <alpha-value>)'
		}
	  }
	},
	plugins: []
  }