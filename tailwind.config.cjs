/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: {
				50: "#fff",
				100: "#3c7eff",
				200: "#2b73fa",
				300: "#246cfa",
				400: "#1666fa",
				500: "#0D5EF4",
				600: "#0e5ef8",
				700: "#085cfc"
			}
		}
    },
  },
	daisyui: {
		themes: ["light", "dark"],
	},
  plugins: [require("daisyui")],
}
