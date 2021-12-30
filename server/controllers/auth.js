// Users controller
const db = require("../models");
const bcrypt = require("bcrypt");
const createJWT = require("./helpers");

const login = async (req, res) => {
    console.log("login controller");
    const { email, password } = req.body;
    // look for user via email
    let foundUser = await db.User.findOne({ email });

    //if we don't find anyone send a 404 and a message so front end knows what to do
    if (!foundUser) {
        console.log("no user");
        return res.send({
            message: "Login Error, please try again",
        });
    } else {
        console.log("user");
        //does the password match
        bcrypt.compare(password, foundUser.password, function (err, result) {
            if (err) {
                return res.send({
                    message: "Login Error, please try again",
                    data: err,
                });
            } else {
                if (result) {
                    const token = createJWT(foundUser);
                    return res.send({
                        message: "Success",
                        data: { token },
                    });
                } else {
                    console.log("BAD pass");
                    return res.send({
                        message: "Login Error, please try again",
                    });
                }
            }
        });
    }
};

module.exports = { login };
