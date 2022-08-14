const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/www"));

app.get("/", function (req, resp) {
	resp.sendFile(path.join(__dirname, "./www/index.html"));
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/projects', function(req, res) {
    res.sendFile(__dirname + '/www/pages/projects.html');
});

app.get('/gallery', function(req, res) {
    res.sendFile(__dirname + '/www/pages/gallery.html');
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "./www/pages/404.html"));
})