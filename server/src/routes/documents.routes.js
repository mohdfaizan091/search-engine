const router = require("express").Router();
const {
  createDocument,
} = require("../controllers/documents.controller");

router.post("/documents", createDocument);

module.exports = router;
