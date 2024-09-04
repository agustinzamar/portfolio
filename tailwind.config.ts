import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"blur-gradient":
					"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
			},
			colors: {
				black: "#111112",
				"custom-orange": "#d96f43",
				lightblue: "#0478ee",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
