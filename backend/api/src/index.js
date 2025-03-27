import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import router from "./routes/router.js";

const app = express();
const PORT = 3000;

(async () => {
  try {
    await connectDB();
    app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
    app.use(express.json());
    app.use("/", router);

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Erro ao iniciar api:", err);
  }
})();
