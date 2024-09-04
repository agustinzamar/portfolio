import type { MetaFunction } from "@remix-run/node";
import { IconLaravel } from "~/assets/laravel";
import { IconStar } from "~/assets/star";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Projects } from "~/components/Projects";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
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
