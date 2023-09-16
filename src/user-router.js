const Router = require("../framework/Router")
const controller = require("./user-controller")
const router = new Router()

router.get("/users", controller.getUsers)

router.post("/users", controller.createUser)

router.delete("/users", controller.deleteUser)

router.put("/users", controller.modifyUserPassword)

module.exports = router
