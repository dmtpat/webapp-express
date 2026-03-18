const dbConnection = require("../data/dbConnection");


function index(req, res) {
    console.log(req.query);
    res.json({ message: "index controller in funzione!" });
}

module.exports = { index };