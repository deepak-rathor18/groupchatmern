const express = require("express");
const router = express.Router();
const UserPage = require("../controler/userControler")

console.log(UserPage)

router.post("/addUser",UserPage.addUser)
router.get("/getUser",UserPage.getUser)
router.delete("/deleteUser/:id",UserPage.deleteUser)
router.put("/updateUser/:id",UserPage.updateUser)



router.post("/login",UserPage.login)




module.exports = router