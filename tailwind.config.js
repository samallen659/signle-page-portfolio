/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "1rem",
				md: "2.5rem",
				lg: "10rem",
			},
		},
		colors: {
			purple: "#755CDE",
			orange: "#F6A560",
			pink: "#F39E9E",
			red: "#EB7565",
			cyan: "#61C4B7",
			maroon: "#552049",
			black: "#030303",
			grey: "#7A746E",
			white: "#FFF7F0",
		},
		fontFamily: {
			sans: ["Plus Jakarta Sans", "sans-serif"],
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#030303",
					"primary-focus": "#755CDE",
					"primary-content": "#FFF7F0",
					secondary: "#EB7565",
					"secondary-focus": "#F6A560",
					"secondary-content": "#FFF7F0",
					"base-100": "#FFF7F0",
				},
			},
		],
	},
	plugins: [require("daisyui"), require("tailwindcss-debug-screens")],
};
