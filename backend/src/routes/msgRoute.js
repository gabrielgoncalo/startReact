const express= require("express");
const router = express.Router();
const postController = require("../controllers/postController");


router.post("/register", postController.criarUser);
router.post("/login", postController.loginUser);
router.post("/", postController.criarPost);
router.get("/", postController.listarPost);



module.exports = router;
