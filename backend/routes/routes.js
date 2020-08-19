const router = require("express").Router();

const {
    getAll,
    getOneById,
    findOne,
    postData,
    deleteOne,
    deleteMany,
    patchOne
    } = require("../controllers/controllers");

router.route("/api").get(getAll);
router.route("/api/:id").get(getOneById);
router.route("/api-one").get(findOne)
router.route("/api").post(postData);
router.route("/api/:id").delete(deleteOne);
router.route("/api-deletemany").delete(deleteMany);
router.route("/api/:id").patch(patchOne);

module.exports = router