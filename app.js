const express = require('express');
const app = express(); 

const cookieParser = require("cookies-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', "ejs");

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(3000);