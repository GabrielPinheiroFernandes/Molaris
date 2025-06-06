import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";
import {
  getAllPacients,
  createPacient,
  deletePacient,
  createRandomPacient,
} from "../controllers/Pacient.js";

const router = Router();

router.get("/", authenticate, getAllPacients);
router.post("/", authenticate, createPacient);
router.delete("/:id", authenticate, deletePacient);

// for testing
router.post("/random-dev", createRandomPacient);
router.get("/get-all-dev", getAllPacients);

export default router;
