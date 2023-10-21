const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Creating a hybrid server for  browser an also for the  mobile users
// GET  /users  -> For the browser users - will return html
// GET /api/users -> For the mobile users - will return the json

app.get("/", (req, res) => {
	res.status(200).end("Homepage");
});

app.get("/api/users", (req, res) => {
	return res.json(users);
});
app.get("/users", (req, res) => {
	const html = `
        <ul>
            ${users.map((user) => {
				return `<li>${user.first_name}</li>`;
			})}
        </ul>
    `;

	return res.send(html);
});

app.get("/api/users/:id", (req, res) => {
	const id = req.params.id;

	const user = users.find((user) => user.id == id);
	console.log(user);

	return res.status(201).json(user);
});

app.listen(PORT, () => {
	console.log(`server running at Port ${PORT}`);
});
