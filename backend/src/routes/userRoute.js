const express= require("express");
const router = express.Router();
const postController = require("../controllers/userController");

router.post("/", postController.criarUser);
router.post("/", postController.loginUser);


module.exports = router;