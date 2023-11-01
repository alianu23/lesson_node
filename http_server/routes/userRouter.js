const { Router } = require("express");
const {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/userController");

const router = Router();

router.route("/").get(getAllUser).post(createUser);

router
  .route("/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = router;
