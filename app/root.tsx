import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import React from "react";
import "./tailwind.css";
import { clsx } from "clsx";
import { useDarkMode } from "~/hooks/useDarkMode";

export function Layout({ children }: { children: React.ReactNode }) {
	const { darkMode } = useDarkMode();

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<Meta />
				<Links />
			</head>
			<body className={`${darkMode ? "dark" : ""}`}>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
