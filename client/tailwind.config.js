/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'primary-light': '#9bbad4',
			primary: '#4f6e98',
			'primary-dark': '#344b6a',
			'secondary-light': '#fbd46a',
			secondary: '#f3b51e',
			tertiary: '#b34a65',
			'tertiary-dark': '#5d2634',
			body: '#2e2e2e',
			'body-light': '#2e2e2eb3',
			black: '#191919',
			white: '#fbfbfb',
			'white-grey': '#e6e6e6',
			real: '#a855f7',
			noreal: '#ec4899',
			yellow: '#fbd46a',
			blue: '#4f6e98',
		},
		fontFamily: {
			title: ['Lato', 'sans-serif'],
			sans: ['Kurale', 'serif'],
		},
		extend: {},
	},
	plugins: [],
};
