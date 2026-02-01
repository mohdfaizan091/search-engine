const router = require("express").Router();
const { search } = require("../controllers/search.controller");

router.get("/search", search);

module.exports = router;
