// Post Controller
const db = require("../models");
const mongoose = require("mongoose");

// Index - GET - Presentational (all of a resource)
const index = (req, res) => {
    console.log("REQ.USER: ", req.user);
    db.Post.find()
        .populate("author")
        .exec((err, populatedPosts) => {
            return res.status(200).json({
                message: "Success",
                data: populatedPosts,
            });
        });
};

// Show - GET - Presentational (id)
const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log("Error in Posts#show:", err);

        return res.status(200).json({
            message: "Success",
            data: foundPost,
        });
    });
};

// Show - GET - Presentational (for Comments)
const showComments = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {
            if (!foundPost) return console.log("Error in Comment#show");

            return res.status(200).json({
                message: "Success",
                data: foundPost.comments,
            });
        })
        .catch((err) => console.log(err));
};

// Create - POST - Functional (Status code 201)
const create = (req, res) => {
    req.body.author = mongoose.Types.ObjectId(req.body.author);
    db.Post.create(req.body, (err, savedPost) => {
        savedPost.populate("author");
        console.log(savedPost, "SAVED POST IN CREATE POST");
        if (err) return console.log("Error in Posts#create:", err);

        return res.status(201).json({
            message: "Success",
            data: savedPost,
        });
    });
};

// Create - POST - Functional (For comments)
const createComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {
            if (!foundPost) return console.log("Error in Comment#create:");

            foundPost.comments.push(req.body);
            foundPost.save();

            return res.status(201).json({
                message: "Success",
                data: foundPost.comments,
            });
        })
        .catch((err) => console.log(err));
};

// Update - PUT - Functional (id)
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) console.log("Error in Posts#update:", err);

            return res.status(202).json({
                data: updatedPost,
            });
        }
    );
};

// Update - PUT - Functional (For comments)
const updateComment = (req, res) => {
    db.Post.findById(req.params.id).then((foundPost) => {
        if (!foundPost) return console.log("Error in Comment#update");

        const commentById = foundPost.comments.id(req.params.commentId);
        commentById.author = req.body.author;
        commentById.body = req.body.body;
        foundPost.save();

        return res.status(202).json({
            message: "Success",
            data: commentById,
        });
    });
};

// Destroy - DELETE - Functional (id)
const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in Posts#destroy:", err);

        return res.status(200).json({
            data: deletedPost,
        });
    });
};

// Destroy - DELETE - Functional (For Comments)
const destroyComment = (req, res) => {
    db.Post.findById(req.params.id).then((foundPost) => {
        if (!foundPost) return console.log("Error in Comment#create");

        const commentById = foundPost.comments.id(req.params.commentId);
        console.log(commentById);
        commentById.remove();
        foundPost.save();

        return res.status(200).json({
            message: "Success",
            data: commentById,
        });
    });
};

module.exports = {
    index,
    show,
    showComments,
    create,
    createComment,
    update,
    updateComment,
    destroy,
    destroyComment,
};
