const dbConnection = require("../data/dbConnection");


function index(req, res) {
    console.log(req.query);

    let sqlQuery = `SELECT title, director, genre, release_year, abstract, image 
        FROM movies_db.movies;
    `;
    dbConnection.query(sqlQuery, (error, rows) => {
        console.log("connesso index");
        if (error) {
            return res.status(500).json({ error: "DB error", message: "erore recupero dati tags dal DB" });
        }
        if (!rows) {
            return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
        }
        res.json(rows);
    });
}

module.exports = { index };