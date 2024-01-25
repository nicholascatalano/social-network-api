const { User, Thought } = require("../models");

module.exports = {
  // GET all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      return res.status(200).json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // GET single though by its _id
  // POST to create a new thought
  // PUT to update a thought by its _id
  // DELETE to remove a thought by its _id
  // POST to create a reaction stored in a single thought's reactions array field
  // DELETE to pull and remove a reaction by the reaction's reactionId value
};
