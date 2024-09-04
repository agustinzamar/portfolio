import { IconLaravel } from "../assets/laravel.jsx";
import { IconLivewire } from "../assets/livewire.jsx";
import { IconReact } from "../assets/react.jsx";
import { IconStar } from "../assets/star.jsx";
import { IconTailwind } from "../assets/tailwind.jsx";
import { Button } from "../components/ui/button.tsx";

export const Hero = (props) => {
	return (
		<div className="relative min-h-screen flex flex-col hero-pattern py-16 lg:py-32 px-8">
			<div className="absolute w-full h-full md:h-1/2 md:w-1/2 -top-[30%] md:top-16 bg-blur-gradient rounded-full blur-xl"></div>
			<div className="absolute h-1/4 w-1/4 top-[40%] right-[10%] bg-blur-gradient rounded-full blur-xl hidden md:block"></div>

			<h2 className="mt-20 sm:mt-0 text-slate-900 font-bold dark:text-gray-100 relative !leading-tight tracking-wider max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl text-pretty text-center">
				<span className="font-bold mr-4">{"{"}</span>
				Creative & <br /> Experienced <br /> Web Developer
				<span className="font-bold ml-4">{"}"}</span>
				<IconStar className="h-24 absolute top-10 -right-16" />
			</h2>
			<IconLaravel className="h-10 md:h-16 absolute rotate-[20deg] top-20 left-32 sm:left-16 md:top-32 lg:left-32" />
			<IconTailwind className="h-9 md:h-12 absolute -rotate-[40deg] top-12 right-32 sm:top-24 sm:right-10 md:top-24 md:right-18 lg:top-24 lg:right-40" />
			<IconReact className="h-10 md:h-16 absolute -rotate-[50deg] bottom-96 left-28 sm:top-80 sm:left-44 md:top-80 md:left-56 lg:top-auto lg:bottom-80 lg:left-56" />
			<IconLivewire className="h-10 md:h-16 absolute -rotate-[30deg] bottom-1/2 right-32 sm:right-40 sm:top-80 md:top-80 md:right-60 lg:top-1/2 lg:right-60" />

			<div className="mt-auto">
				<hr className="mb-8 border-0 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent" />

				<div className="text-slate-900 dark:text-gray-100 flex flex-col items-center md:flex-row md:justify-between gap-8 md:gap-32">
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
