const express = require("express");
const app = express();

const path = require("path");

app.listen(3080, () => console.log("Servidor escuchando en el puerto 3080!"))

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contacto.html"));
});