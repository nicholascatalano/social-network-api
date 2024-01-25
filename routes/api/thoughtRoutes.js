// Imports
const router = require("express").Router();

// Imports functions written in thoughtController.js file
const { getThoughts } = require("../../controllers/thoughtController");

// Route -> http://localhost:3001/api/thoughts
router.route("/").get(getThoughts);

// Exports
module.exports = router;
