const messagePage = require("../controler/messageController")
const express = require("express");
const router = express.Router();



// console.log(UserPage)

router.post("/addMessage",messagePage.addMessage)
router.get("/getMessage",messagePage.getMessage)


router.delete("/deleteMessage/:id",messagePage.deleteMessage)
router.put("/updateMessage/:id",messagePage.updateMessage)







module.exports = router