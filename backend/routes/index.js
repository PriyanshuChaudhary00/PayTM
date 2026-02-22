const express = require("express")
const userRouter = require('./user')
const userRouterAcc = require('./account')
const router = express.Router()

router.use("/user" , userRouter)
router.use("/account" , userRouterAcc)

module.exports = router;