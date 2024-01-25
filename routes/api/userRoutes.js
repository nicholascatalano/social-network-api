// Imports
const router = require("express").Router();

// Imports functions written in userController.js file
const { getUsers, getUser } = require("../../controllers/userController");

// Route -> http://localhost:3001/api/users
router.route("/").get(getUsers);

// Route -> http://localhost:3001/api/users/:userId
router.route("/:userId").get(getUser);

// Exports
module.exports = router;
