import React, { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [page, setPage] = useState({ page: "", links: [] });
	const [location, setLocation] = useState({});

	const SidebarOpen = () => {
		setIsSidebarOpen(true);
	};

	const SidebarClose = () => {
		setIsSidebarOpen(false);
	};

	const SubmenuOpen = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};

	const SubmenuClose = () => {
		setIsSubmenuOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				SidebarOpen,
				SidebarClose,
				isSubmenuOpen,
				SubmenuOpen,
				SubmenuClose,
				page,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
