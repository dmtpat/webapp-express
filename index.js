console.log("Benvenuto!")
const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log("Cliamata di base del server");
    res.send("Server della webApp!");
})

app.listen(port, () => {
    console.log("La chiamata è stata accettata");
})