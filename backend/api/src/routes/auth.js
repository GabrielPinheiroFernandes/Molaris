import express from "express";
import {
  loginController,
  refreshTokenController,
  logoutController,
  getAllRefreshTokensController
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/refresh", refreshTokenController);
router.post("/logout", logoutController);
router.get("/all-refresh-tokens", getAllRefreshTokensController);

export default router;
