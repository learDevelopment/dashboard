/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				light: '#838383',
				silver: '#9197B3',
				'silver-dark': '#757575',
				'silver-light': '#B5B7C0',
				red: '#DF0404',
				green: '#008767',
				'green-light': '#16C098',
				dark: '#292D32'
			},
			backgroundColor: {
				silver: '#F9FBFF',
				green: 'rgba(22, 192, 152, 0.38)',
				red: '#FFC5C5',
				purple: '#5932EA'
			},
			boxShadowColor: {
				silver: 'rgba(226,236,249,0.5)'
			},
			borderColor: {
				silver: '#EEEEEE',
				green: '#00B087',
				red: '#DF0404'
			},
			fontFamily: {
				poppins: ['Poppins']
			}
		}
	},
	plugins: []
}
