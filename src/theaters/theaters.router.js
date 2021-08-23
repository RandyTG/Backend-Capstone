const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.route("/").all(cors()).get(controller.list).all(methodNotAllowed);

module.exports = router;
