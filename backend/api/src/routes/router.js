import { Router } from "express";
import userRoutes from "./user.js";
import authRoutes from "./auth.js";
import pacientRoutes from "./pacient.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/pacients", pacientRoutes);
router.use("/auth", authRoutes);

export default router;
