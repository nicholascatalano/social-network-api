// Imports
const router = require("express").Router();

// Imports functions written in userController.js file
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// Route -> http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// Route -> http://localhost:3001/api/users/:userId
router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

// Exports
module.exports = router;
