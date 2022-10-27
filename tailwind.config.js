/** @type {import('tailwindcss').Config} */
module.exports = {
	
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					4: "#f1f3ff",
					5: "rgba(108,133,255,0.05)",
					9: "#272934",
					10: "#5470ff14",
					100: "#3c7eff",
					200: "#2b73fa",
					300: "#738afd",
					400: "#647eff",
					500: "#5975ff",
					600: "#0e5ef8",
					700: "#085cfc"
				},
				dark: {
					5: "#1c1c1c",
					10: "rgb(35,35,35)",
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
