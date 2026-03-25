console.log("Benvenuto!")
const express = require("express");
const cors = require("cors");
const app = express();

const moviesRouter = require('./routers/movies.js');
const reviewsRouter = require('./routers/reviews.js')

const not_found = require("./middlewares/not_found.js");
const errors_handler = require("./middlewares/errors_handler.js");

const corsConfig = { origin: process.env.FE_URL };
app.use(cors(corsConfig));

app.use(express.static("public"));
app.use(express.json());


app.get('/', (req, res) => {
    console.log("Cliamata di base del server");
    res.send("Server della webApp!");
})

app.use("/api/movies", moviesRouter);
app.use("/api/reviews", reviewsRouter);

app.use(not_found);
app.use(errors_handler);

app.listen(process.env.APP_PORT, () => {
    console.log("La chiamata è stata accettata");
})