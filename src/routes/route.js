const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookModel = require("../models/bookModel")

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.post("/getParticularBooks", BookController.getParticularBooks )

router.post("/getBooksInYear", BookController.getBooksInYear  )

router.get("/getRandomBooks", BookController.getRandomBooks)

router.get("/bookList", BookController.bookList)

router.get("/getXINRBooks", BookController.getXINRBooks)

module.exports = router;