/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					5: "rgba(108,133,255,0.05)",
					10: "#5470ff14",
					100: "#3c7eff",
					200: "#2b73fa",
					300: "#246cfa",
					400: "#647eff",
					500: "#0D5EF4",
					600: "#0e5ef8",
					700: "#085cfc"
				},
				dark: {
					5: "rgb(35,35,35)",
					10: "#5470ff14",
					100: "#3c7eff",
					200: "#2b73fa"
				}
			},
			boxShadow: {
				"around": "0 1px 18px 0px #9da6c95e"
			}
		},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui")],
}
