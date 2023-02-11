// REQUIRING MODULES
import express from "express";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

//READ
router.get("/:id", verifyToken, getUser);
router.patch("/:id/friends", verifyToken, getUserFriends);

//UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

// EXPORT THE MODULE
export default router;