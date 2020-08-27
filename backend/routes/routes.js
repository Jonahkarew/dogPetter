const router = require("express").Router();
const User = require("../models/model")
const bcrypt = require("bcryptjs")
const {
    register,
    petDog,
    getProfile,
    getDoggos,
    login
    } = require("../controllers/controllers");



router.route("/api/register").post(register)
router.route("/api/login").post(login)
router.route("/api-pet").post(petDog)
router.route("/api").get(getProfile)
router.route("/api/doggos").get(getDoggos)

module.exports = router