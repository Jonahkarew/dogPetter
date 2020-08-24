const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/model");

passport.serializeUser((user, done) => {
    console.log("*** serializeUser called, user:")
    console.log(user)
    console.log("=============")
    done(null, {_id: user._id})
})



passport.deserializeUser((id, done) => {
    console.log("deserialize user called")
    User.findOne(
        {_id: id},
        "email",
        (err, user) => {
            console.log("deserialize user")
            console.log(user)
            console.log("===================")
            done(null, user)
        }
    )
})

passport.user(LocalStrategy)

module.exports = passport;