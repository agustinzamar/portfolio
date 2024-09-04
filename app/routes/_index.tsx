import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Projects } from "~/components/Projects";

export const meta: MetaFunction = () => {
	return [
		{ title: "Agustin Zamar" },
		{
			name: "description",
			content:
				"I'm a full stack web developer with over 3 years of experience. Let's talk!",
		},
	];
};

export default function Index() {
	return (
		<div className="relative w-full min-h-screen bg-primary overflow-hidden pt-10">
			<Header />
			<Hero />
			<Projects />
		</div>
	);
}
