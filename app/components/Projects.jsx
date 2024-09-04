import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card.tsx";

const projects = [
	{
		title: "E-commerce Platform",
		description:
			"A full-stack e-commerce solution with React, Node.js, and MongoDB.",
		image: "https://placehold.co/600x400",
		githubLink: "https://github.com/yourusername/ecommerce-platform",
		liveLink: "https://ecommerce-platform-demo.vercel.app",
	},
	{
		title: "Weather App",
		description:
			"Real-time weather application using React and OpenWeatherMap API.",
		image: "https://placehold.co/600x400",
		githubLink: "https://github.com/yourusername/weather-app",
		liveLink: "https://weather-app-demo.vercel.app",
	},
	{
		title: "Task Manager",
		description:
			"A productivity app built with React and Firebase for real-time updates.",
		image: "https://placehold.co/600x400",
		githubLink: "https://github.com/yourusername/task-manager",
		liveLink: "https://task-manager-demo.vercel.app",
	},
	{
		title: "Portfolio Website",
		description:
			"A responsive portfolio website showcasing my projects and skills.",
		image: "https://placehold.co/600x400",
		githubLink: "https://github.com/yourusername/portfolio",
		liveLink: "https://yourusername.vercel.app",
	},
];

export const Projects = () => {
	return (
		<section className="min-h-96 px-4">
			<h2 className="text-5xl sm:text-7xl md:text-9xl font-semibold text-pretty text-gray-50 text-center">
				{`{Portfolio}`}
			</h2>
			<h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-pretty text-gray-50 text-center">
				What I've done previously
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-12">
				{projects.map((project, index) => (
					<Card key={index} className="flex flex-col">
						<CardHeader>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
						</CardHeader>
						<CardContent className="flex-grow">
							<CardTitle>{project.title}</CardTitle>
							<CardDescription className="mt-2">
								{project.description}
							</CardDescription>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline" size="sm" asChild>
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</a>
							</Button>
							<Button variant="default" size="sm" asChild>
								<a
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="mr-2 h-4 w-4" />
									Live Demo
								</a>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
