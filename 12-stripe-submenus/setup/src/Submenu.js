import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
	const { isSubmenuOpen, location } = useGlobalContext();
	// console.log(location);

	const container = useRef(null);

	useEffect(() => {
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
	}, [location]);

	return (
		<aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
			submenu component
		</aside>
	);
};

export default Submenu;
