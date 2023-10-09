import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { SidebarOpen, SubmenuOpen, SidebarClose } = useGlobalContext();

	/* todo: dynamically add the navbar  options from the data file.
	 */
	return (
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="stripe" />
					<button className="btn toggle-btn" onClick={SidebarOpen}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn">products</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
