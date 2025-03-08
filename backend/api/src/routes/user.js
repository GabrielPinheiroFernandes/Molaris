import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";
import {
  getAllUsers,
  createUser,
  deleteUser,
  deleteAllUsers,
  createRandomUser,
} from "../controllers/user.js";

const router = Router();

// Rota para listar todos os usuários (protegida)
router.get("/", getAllUsers);

// Rota para criar um usuário (protegida)
router.post("/", authenticate, createUser);

// Rota para deletar um usuário pelo ID (protegida)
router.delete("/:id", authenticate, deleteUser);

// Rota para criar um usuário com dados aleatórios (sem autenticação necessária)
router.post("/random", createRandomUser);

export default router;
