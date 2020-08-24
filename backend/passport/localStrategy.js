const User = require("../models/model");
const LocalStrategy = require("passport-local").Strategy()

const strategy = new LocalStrategy(
    {
        usernameField: 'username'
    },
    function (email, password, done){
        User.findOne({email: email}, (err, user) => {
            if (err) {
                return done(err)
            }
            if(!user){
                return done(null, false, { message: "incorrect username"})
            }
            if(!user.isCorrectPassword(password)){
                return done(null, false, { message: "Incorrect password"})
            }
            return done(null, user)
        })
    }
)

module.exports = strategy;