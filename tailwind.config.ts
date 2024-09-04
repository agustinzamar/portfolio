import animations from "@midudev/tailwind-animations";
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

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
			keyframes: {
				"shine-pulse": {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
			animation: {
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			},
		},
	},
	plugins: [tailwindAnimate, animations],
} satisfies Config;
