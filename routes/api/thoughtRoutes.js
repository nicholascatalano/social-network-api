// Imports
const router = require("express").Router();

// Imports functions written in thoughtController.js file
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
} = require("../../controllers/thoughtController");

// Route -> http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);

// Route -> http://localhost:3001/api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThought).put(updateThought);

// Exports
module.exports = router;
