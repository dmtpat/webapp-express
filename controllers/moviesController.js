const dbConnection = require("../data/dbConnection");

//------------------------------CRUD---------------------------------------------
//-----------------------------index--R------------------------------------------
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
//-----------------------------show---R------------------------------------------
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
//-----------------------------store---C-----------------------------------------
function store(req, res) {
    const arrayParams = [req.body.title, req.body.director, req.body.genre, req.body.release_year, req.body.abstract, req.body.image, new Date(), new Date()];
    const sqlQuery = `INSERT INTO movies(title, director, genre, release_year, abstract, image, created_at, updated_at)
            VALUES(?,?,?,?,?,?, ?, ?);`;
    dbConnection.query(sqlQuery, arrayParams, (error, rows) => {
        if (error) {
            return res.status(500).json({ error: "DB Error", message: error.message });
        }
        console.log(rows.insertId);
        dbConnection.query("SELECT * FROM movies WHERE id = ?", [rows.insertId], (error, row) => {
            if (error) {
                return res.status(500).json({ error: "DB error", message: error.message });
            }
            const results = row[0];
            return res.status(201).json(results);
        })
    })
}
//-----------------------------update--U-----------------------------------------

//-----------------------------modify--U-----------------------------------------

//-----------------------------destroy-D-----------------------------------------



module.exports = { index, show, store };