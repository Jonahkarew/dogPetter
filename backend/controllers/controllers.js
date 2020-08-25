const User = require("../models/model");
const axios = require("axios");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    console.log("user register")
    console.log(req.body)
    User.findOne({username: req.body.username}, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("user already exists")
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword
            })
            await newUser.save()
            res.send("user created")
        }
    })
}

const login = async (req, res, next) => {
    console.log("user login")
    console.log(req.body)



    passport.authenticate("local", (err, user, info) => {
        if (err) throw err
        if (!user) res.send("no user exists")
        else {
            req.logIn(user, err => {
                if (err) throw err
                res.send("successfully authenticated")
            })
        }
    })(req, res, next)
}

const petDog = (req, res, next) => {
    var goodBoi = req.body.petted;

    var newPet = goodBoi
    try {
        User.findOneAndUpdate(
            { email: req.body.email },
            { $push: { petted: newPet } },
            { new: true },
            (err, data) => {
                if (err) {
                    console.log("something went wrong when updating data!")
                }
                return res.send(data)
            }
        )
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const getProfile = async (req, res) => {
    const data = await User.findOne({ email: req.body.email })
    try {
        res.send(data)
    }
    catch (err) {
        res.status(500).send(err)
    }
}


const getDoggos = async (req, res) => {
    try {
        const data = await axios.get('https://dog.ceo/api/breeds/image/random/10')
        res.status(200).send(data.data.message)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    register,
    login,
    petDog,
    getProfile,
    getDoggos
}