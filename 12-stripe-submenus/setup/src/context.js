import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

	const SidebarOpen = () => {
		setIsSidebarOpen(true);
	};

	const SidebarClose = () => {
		setIsSidebarOpen(false);
	};
	const SubmenuOpen = () => {
		setIsSubmenuOpen(true);
	};

	const SubmenuClose = () => {
		setIsSubmenuOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isSubmenuOpen,
				isSidebarOpen,
				SubmenuOpen,
				SubmenuClose,
				SidebarOpen,
				SidebarClose,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
