const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', "*");
	next();
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get("/get", (req, res) => {
	res.status(200).send({});
});

app.post("/post", (req, res) => {
	
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
