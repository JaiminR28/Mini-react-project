import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { SidebarOpen, SubmenuOpen, SidebarClose } = useGlobalContext();

	/* todo: dynamically add the navbar  options from the data file.
	 */

	const displaySubmenu = (e) => {
		// console.log(e.target.textContent);
		// console.log(e.target.getBoundingClientRect());
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3; //  because we want the margin for 3px
		SubmenuOpen(page, { center, bottom });
	};
	const handleSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			SidebarClose();
		}
	};
	return (
		<nav className="nav" onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="stripe" />
					<button className="btn toggle-btn" onClick={SidebarOpen}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							products
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							company
						</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
