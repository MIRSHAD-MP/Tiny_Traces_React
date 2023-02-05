// REQUIRING MODULES
import express from "express";
import {login} from "../controllers/auth.js";

const router = express.Router();

//USER ROUTES
router.post("/login", login);

// EXPORT THE MODULE
export default router;