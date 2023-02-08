import express from "express";
import {
  verifyToken,
  verifyUser,
  verify_IsAdmin,
} from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

// Check if user its authenticated
/**
 *router.get("/check_authentication", verifyToken, (req, res, next) => {
  res.send("Hello user you are logged in");
});

// check if user can do crud operations
router.get("/checkUser/:id", verifyUser, (req, res, next) => {
  res.send("You are logged in and can perform crud operations in your account");
});

// check if user its admin
verify_IsAdmin;
router.get("/check_isAdmin/:id", verify_IsAdmin, (req, res, next) => {
  res.send(
    "You are logged in and you are admin and can perform crud operations in all accounts"
  );
}); 
 * 
 */

// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get
router.get("/:id", verifyUser, getUser);

// Get All
router.get("/", verify_IsAdmin, getAllUsers);

export default router;
