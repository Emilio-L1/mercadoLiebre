const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 3080;

app.listen(3080, () => console.log("Servidor escuchando en el puerto 3080!"))

app.use(express.static("public"));

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});
