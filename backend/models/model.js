const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: Number,
        default: 0,
        validate(value){
            if( value < 0) throw new Error("negative calories aren't real")
        }
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;