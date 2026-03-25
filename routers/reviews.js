const express = require("express");
const router = express.Router();
const movies = require("../data/dbConnection");

const reviewsController = require("../controllers/reviewsController");


//index Read
router.get('/', reviewsController.index);

module.exports = router;