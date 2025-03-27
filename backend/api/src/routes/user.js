import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";
import {
  getAllUsers,
  createUser,
  deleteUser,
  createRandomUser,
} from "../controllers/user.js";

const router = Router();

router.get("/", authenticate, getAllUsers);
router.post("/", authenticate, createUser);
router.delete("/:id", authenticate, deleteUser);

// for testing
router.post("/random-dev", createRandomUser);
router.get("/get-all-dev", getAllUsers);

export default router;
