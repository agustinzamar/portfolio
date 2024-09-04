import { Link } from "@remix-run/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button.tsx";
import { useDarkMode } from "../hooks/useDarkMode.jsx";

export function Header() {
	const { darkMode, setDarkMode } = useDarkMode();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	// Close menu when resizing to larger screens
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMenuOpen]);

	return (
		<header className="bg-slate-50 dark:bg-black shadow-sm fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="w-full flex justify-between items-center py-4 md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link to="/">
							<span className="sr-only">Your Name</span>
							<img
								className="h-8 w-auto sm:h-10"
								src="/placeholder.svg?height=40&width=40"
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<button
							type="button"
							className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
							onClick={toggleMenu}
						>
							<span className="sr-only">
								{isMenuOpen ? "Close menu" : "Open menu"}
							</span>
							{isMenuOpen ? (
								<X className="h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
					<nav className="hidden md:flex items-center gap-x-10">
						<Link
							to="/about"
							className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200 relative group"
						>
							About
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
						</Link>
						<Link
							to="/projects"
							className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200 relative group"
						>
							Projects
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
						</Link>
						<Link
							to="/blog"
							className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200 relative group"
						>
							Blog
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
						</Link>
						<Link
							to="/contact"
							className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200 relative group"
						>
							Contact
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
						</Link>
						<Button
							variant="link"
							className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 w-min m-0 p-0"
							onClick={() => setDarkMode(!darkMode)}
						>
							{darkMode ? <Sun /> : <Moon />}
						</Button>
					</nav>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link
						to="/about"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-300 hover:bg-gray-800"
					>
						About
					</Link>
					<Link
						to="/projects"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-300 hover:bg-gray-800"
					>
						Projects
					</Link>
					<Link
						to="/blog"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-300 hover:bg-gray-800"
					>
						Blog
					</Link>
					<Link
						to="/contact"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-300 hover:bg-gray-800"
					>
						Contact
					</Link>
				</div>
			</div>
		</header>
	);
}
