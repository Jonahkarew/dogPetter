const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: () => Promise.resolve(() => this.compare(user))
        }
    },
    password: {
        type: String,
        required: true
    },
    petted: [
        String
    ]
})

const saltRounds = parseInt(process.env.SALTROUNDS)

userSchema.pre("save", function createPassword(next){
    if (this.isNew || this.isModified("password")){
        const document = this;
        bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err)
            }
            else{
                document.password = hashedPassword
                next();
            }
        })
    }
})

userSchema.methods.isCorrectPassword = function isCorrectPassword(password){
    const document = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, document.password, function compareCallback(err, same){
            if (err){
                console.log(err)
                reject(err)
            }
            else{
                resolve(same)
            }
        })
    })
}



const User = mongoose.model("User", userSchema);

module.exports = User;