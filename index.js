const express = require("express");
const app = express(); 
const path = require("path");

let port = 8080;

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rollDice", (req, res) => {
    let DiceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { DiceValue });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    res.render("Insta.ejs", { data });
});

app.get("/hello", (req, res) => {
    res.send("hello");
});