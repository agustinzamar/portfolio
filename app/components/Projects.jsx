import { ExternalLink, Github } from "lucide-react";
import { MagicCard } from "../components/magicui/magic-card.tsx";
import { Button } from "../components/ui/button.tsx";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card.tsx";
import file from "../projects.json";
import { DotPattern } from "./magicui/dot-pattern.tsx";

export const Projects = () => {
	return (
		<section className="relative dark:bg-black py-16">
			<DotPattern className="w-[15vw] absolute left-0 top-0 z-0" />

			<div className="relative max-w-7xl mx-auto min-h-96 px-4 z-10">
				<h2 className="md:mt-20 lg:mt-0 font-bold text-slate-900 dark:text-gray-100 relative !leading-tight tracking-wider max-w-4xl mx-auto text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-pretty text-center">
					{`{Portfolio}`}
				</h2>
				<h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-pretty text-gray-50 text-center">
					What I've done previously
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-12 px-4 lg:px-0">
					{file.projects.map((project, index) => (
						<MagicCard className="flex w-full" key={index}>
							<div className="h-full w-full flex flex-col justify-start">
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
									{project.githubLink && (
										<Button
											variant="outline"
											size="sm"
											asChild
											className="z-10"
										>
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="mr-2 h-4 w-4" />
												GitHub
											</a>
										</Button>
									)}
									<Button
										variant="default"
										size="sm"
										asChild
										className="ml-auto z-10"
									>
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-2 h-4 w-4" />
											Go to site
										</a>
									</Button>
								</CardFooter>
							</div>
						</MagicCard>
					))}
				</div>
			</div>
			<DotPattern className="w-[15vw] absolute right-0 top-0 z-0" />
		</section>
	);
};
