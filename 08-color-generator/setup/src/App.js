import React, { Fragment, useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(color);

		// Incase of false values of collor it will return error so will use the try Catch block

		try {
			let colors = new Values(color).all(10);
			setList(colors);
		} catch (error) {
			setError(true);
			alert(error);
		}
	};

	return (
		<Fragment>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#ffffff"
						className={`${error ? "error" : null}`}
					></input>
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					console.log(color);
					return <SingleColor key={index} {...color} index={index} />;
				})}
			</section>
		</Fragment>
	);
}

export default App;
