/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#f1fb42',
				secondary: '#181818',
				terciary: '#ffffff',
				quaternary: '#f5f5f5',
			},
		},
	},
	plugins: [],
};
