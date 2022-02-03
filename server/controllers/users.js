// Users controller
const db = require("../models");
const createJWT = require("./helpers");

// Index - GET - Presentational (all of one resource)
const index = async (req, res) => {
    const users = await db.User.find({});
    console.log(users);
    res.json(users);
};

const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) return console.log("Error in User#create:", err);

        const token = createJWT(savedUser);
        return res.status(201).json({
            message: "Success",
            data: { token },
        });
    });
};

module.exports = { index, create };
