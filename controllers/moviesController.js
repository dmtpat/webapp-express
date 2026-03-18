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

function show(req, res) {
    const id = Number(req.params.id);
    console.log("Il film da mostrare è ", id);

    const sqlQuery = `SELECT title, director, genre, release_year, abstract, image 
    FROM movies_db.movies
    WHERE id=?
    `;
    dbConnection.query(sqlQuery, [id], (error, rows) => {
        console.log("connesso show");
        if (error) {
            return res.status(500).json({ error: "DB error", message: "erore recupero dati tags dal DB" });
        }
        if (!rows) {
            return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
        }
        res.json(rows);
    });
}

module.exports = { index, show };