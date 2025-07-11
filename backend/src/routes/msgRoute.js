const express= require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/", postController.criarPost);
router.get("/", postController.listarPost);

module.exports = router;
