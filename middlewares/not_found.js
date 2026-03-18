function not_found(req, res, next) {
    console.log("Errore Not Found(middlewares)");
    res.status(404).json({ error: "Not Found", message: "404 Content not found!" });
}
module.exports = not_found