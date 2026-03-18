const express = require("express");
const router = express.Router();
const movies = require("../data/dbConnection");

const moviesController = require("../controllers/moviesController");


//index Read
router.get('/', moviesController.index);

module.exports = router;