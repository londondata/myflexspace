// Post Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User" },
        body: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: "User" },
        body: { type: String, required: true },
        date: { type: Date },
        comments: [commentSchema],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);
