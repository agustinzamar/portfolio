import { IconLaravel } from "../assets/laravel.jsx";
import { IconLivewire } from "../assets/livewire.jsx";
import { IconReact } from "../assets/react.jsx";
import { IconTailwind } from "../assets/tailwind.jsx";
import { Button } from "../components/ui/button.tsx";

export const Hero = () => {
	return (
		<div className="relative min-h-screen flex flex-col hero-pattern py-16 lg:py-32 px-8">
			<div className="absolute w-full h-full md:h-1/2 md:w-1/2 -top-[30%] md:top-16 bg-blur-gradient rounded-full blur-xl"></div>
			<div className="absolute h-1/4 w-1/4 top-[40%] right-[10%] bg-blur-gradient rounded-full blur-xl hidden md:block"></div>

			<h2 className="mt-20 lg:mt-0 text-slate-900 font-bold dark:text-gray-100 relative !leading-tight tracking-wider max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-pretty text-center">
				<span className="font-bold mr-4">{"{"}</span>
				<span className="animate-fade-in-up">
					Creative & <br />{" "}
				</span>
				<span className="animate-fade-in-up animate-delay-100">
					Experienced
				</span>{" "}
				<br />
				<span className="animate-fade-in-up">Web Developer</span>
				<span className="font-bold ml-4">{"}"}</span>
			</h2>
			<IconLaravel className="animate-sink animate-duration-[2s] repeat-infinite h-10 md:h-16 absolute rotate-[20deg] hidden md:block md:top-32 md:left-24 lg:left-32" />
			<IconTailwind className="animate-sink animate-delay-800 animate-duration-[2s] repeat-infinite h-9 md:h-12 absolute -rotate-[40deg] hidden md:block md:top-24 md:right-20 lg:right-40" />
			<IconReact className="animate-sink animate-delay-400 animate-duration-[2s] repeat-infinite h-10 md:h-16 absolute -rotate-[50deg] hidden md:block md:top-96 lg:top-auto lg:bottom-80 md:left-56" />
			<IconLivewire className="animate-sink animate-delay-1200 animate-duration-[2s] repeat-infinite h-10 md:h-16 absolute -rotate-[30deg] hidden md:block md:bottom-80 lg:top-1/2 md:right-60" />

			<div className="mt-auto">
				<hr className="mb-8 border-0 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent" />

				<div className="text-sm sm:text-md lg:text-lg text-slate-900 dark:text-gray-100 flex flex-col items-center md:flex-row md:justify-between gap-8 md:gap-32">
					<p>
						<strong>Full stack developer</strong> for more than{" "}
						<strong>3 years</strong> in a professional field and more than 7
						years by vocation. The creation of applications is a passion before
						being a profession.
					</p>

					<Button className="max-w-max min-w-40 h-12">Hire me!</Button>
				</div>
			</div>
		</div>
	);
};
