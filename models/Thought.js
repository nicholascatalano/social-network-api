const { Schema, model } = require("mongoose");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Creates a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
userSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize Thought model
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
