/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			gray: "#D6DBDC",
			orange: "#EA7839",
			"light-orange": "#D67D4D",
		},
	},

	plugins: [],
};
