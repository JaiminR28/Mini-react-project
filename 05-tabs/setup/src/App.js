import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);

	const fetchJobs = async () => {
		const response = await fetch(
			"https://course-api.com/react-tabs-project"
		);
		const data = await response.json();
		setJobs(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (loading) {
		return (
			<section>
				<h1>loading...</h1>
			</section>
		);
	}

	return <h1>Jobs</h1>;
}

export default App;
