console.log("Benvenuto!")
const express = require("express");
const app = express();

const moviesRouter = require('./routers/movies.js');

const not_found = require("./middlewares/not_found.js");
const errors_handler = require("./middlewares/errors_handler.js");

const port = 3000;

app.use(express.static("public"));
app.use(express.json());


app.get('/', (req, res) => {
    console.log("Cliamata di base del server");
    res.send("Server della webApp!");
})

app.use("/api/movies", moviesRouter);

app.use(not_found);
app.use(errors_handler);

app.listen(port, () => {
    console.log("La chiamata è stata accettata");
})