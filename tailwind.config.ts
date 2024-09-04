import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"primary-gradient":
					"radial-gradient(at top left, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
			},
		},
	},
	plugins: [],
} satisfies Config;
