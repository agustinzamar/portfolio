import { useEffect, useState } from "react";

export const useDarkMode = () => {
	const [darkModeEnabled, setDarkModeEnabled] = useState();

	useEffect(() => {
		setDarkModeEnabled(localStorage.getItem("darkMode") === "true");
	}, []);

	useEffect(() => {
		const $body = document.querySelector("body");

		if (darkModeEnabled) {
			$body.classList.add("dark");
		} else {
			$body.classList.remove("dark");
		}
	}, [darkModeEnabled]);

	console.log(darkModeEnabled);

	function toggleDarkMode(value) {
		localStorage.setItem("darkMode", value);
		setDarkModeEnabled(value);
	}

	return {
		darkMode: darkModeEnabled,
		setDarkMode: toggleDarkMode,
	};
};
