const router = require("express").Router();

const {
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
    } = require("../controllers/controllers");

// router.route("/api").get(getAll);
router.route("/api/:id").get(getOneById);
router.route("/api-one").get(findOne)
// router.route("/api").post(postData);
router.route("/api/:id").delete(deleteOne);
router.route("/api-deletemany").delete(deleteMany);
router.route("/api/:id").patch(patchOne);

// new routes
router.route("/api").post(register)
router.route("/api-pet").post(petDog)
router.route("/api").get(getProfile)
router.route("/doggos").get(getDoggos)

module.exports = router