const User = require("../models/model");
const axios = require("axios");

// basic get all controller
const getAll = async (req, res) => {
    const data = await Model.find({});

    try {
        res.send(data)
    } catch (err) {
        res.status(500).send(err)
    }
}

// basic get one by id controller
const getOneById = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        if (!data) res.status(404).send("No item found")
        res.status(200).send(data)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

// basic find specific item, return one
const findOne = async (req, res) => {
    const data = await Model.findOne({ "key of query": "specific instance" })
    try {
        res.send(data)
    }
    catch (err) {
        res.status(500).send(err)
    }
}


// basic create one controller
const postData = async (req, res) => {
    const data = new Model(req.body)
    try {
        await data.save()
        res.send(data)
    }
    catch (err) {
        res.status(500).send(err)
    }
}


// basic delete one controller
const deleteOne = async (req, res) => {
    try {
        const data = await Model.findByIdAndDelete(req.params.id)

        if (!data) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

// basic delete many controller
//      deletes all that match condition
const deleteMany = async (req, res) => {
    try {
        await Model.deleteMany({ thisIsTheConditionKeyToReplace: "this is the condition value to replace" }, function (err, result) {
            if (err) {
                res.send(err);

                res.status(200).send()
            } else {
                res.send(result)
            }
        })

    }
    catch (err) {
        res.status(500).send(err)
    }
}


// basic patch one controller
const patchOne = async (req, res) => {
    try {
        await Model.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).send(req.body)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const register = (req, res) => {
    const {
        email,
        password
    } = req.body;

    const user = new User({
        email,
        password
    })

    try {
        user.save()
        res.send(user)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const petDog = (req, res, next) => {
    var goodBoi = req.body.petted;

    var newPet = goodBoi
    try {
        User.findOneAndUpdate(
                              { email: req.body.email },
                              { $push: { petted: newPet } },
                              {new: true},
                              (err, data) => {
                                  if (err){
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
    getAll,
    getOneById,
    findOne,
    postData,
    deleteOne,
    deleteMany,
    patchOne,



    register,
    petDog,
    getProfile,
    getDoggos
}