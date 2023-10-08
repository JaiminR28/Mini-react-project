import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ childeren }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const setSidebarOpen = () => {
		setIsSidebarOpen(true);
	};

	const setSidebarClose = () => {
		setIsSidebarOpen(false);
	};
	const setModalOpen = () => {
		setIsModalOpen(true);
	};

	const setModalClose = () => {
		setIsModalOpen(false);
	};
	return <AppContext.Provider>{childeren}</AppContext.Provider>;
};
