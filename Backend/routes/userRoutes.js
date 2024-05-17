import express from "express";
import {
  followUnFollowUser,
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
  getSuggestedUsers,
  getUserProfile,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile/:username", getUserProfile);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser);
export default router;
