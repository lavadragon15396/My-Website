const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/www'));

app.get("/", function (req, resp) {
	resp.sendFile(path.join(__dirname, "./www/index.html"));
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});
