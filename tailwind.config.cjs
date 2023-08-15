/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			'white': '#ffffff',
			'black': '#000000',
			'azure': '#0067c8',
			'cranberry': '#d41367',
			'sky-blue': '#00a2e0',
			'gold': '#f7a81b',
			'royal-blue': '#17458f',
			'turquoise': '#00adbb',
			'orange': '#ff7600',
			'violet': '#901f93',
			'grass': '#009739',
			'powder-blue': '#b9d9eb',
			'charcoal': '#54565a',
			'silver': '#d0cfcd',
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}
