const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

///Register
router.post("/register", async (req, res) => {
    // res.send("hey its auth route")

    try {
        //generate hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        ///create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });

        const user = await newUser.save();
        const response = {
            message: "User created successfully.",
            user: user,
        };
        res.status(200).json(response);
    } catch (err) {
        const response = {
            message: "Couldn't create user.",
            error: err,
        };

        res.status(400).json(response);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("wrong password");

        const response = {
            message: "Login successful.",
            user: user,
        };

        res.status(200).json(response);
    } catch (err) {
        const response = {
            message: "Login failed.",
            error: err,
        };

        res.status(400).json(response);
    }
});

module.exports = router;
