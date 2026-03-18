const express = require("express");
const router = express.Router();
const movies = require("../data/dbConnection");

const moviesController = require("../controllers/moviesController");


//index Read
router.get('/', moviesController.index);

//show  Read
router.get('/:id', moviesController.show);

module.exports = router;