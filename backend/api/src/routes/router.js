import { Router } from "express";
import userRoutes from "./user.js";
import authRoutes from "./auth.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
