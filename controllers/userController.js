const { User, Thought } = require("../models");

const userController = {
  // GET all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // GET a single user by its _id and populated thought and friend data
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })

        .select("-__v")
        .populate("thoughts", "friends");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // POST a new user
  // PUT to update a user by its _id
  // DELETE to remove user by its _id
  // add a friend
  // remove a friend
};

module.exports = userController;
