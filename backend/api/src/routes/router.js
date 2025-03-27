import { Router } from "express";
import userRoutes from "./user.js";
import authRoutes from "./auth.js";

const router = Router();

// Definindo as rotas para os usuários
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

// Rota de teste
router.use("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});

export default router;
