import { verifyToken } from "../services/auth.js";

export const authenticate = (req, res, next) => {
  try {
    // Obtém o token do cabeçalho da requisição
    const token = req.headers["authorization"]?.split(" ")[1];

    console.log("Token recebido:", token); // Log para depuração

    if (!token) {
      return res.status(403).json({ message: "Token não fornecido" });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: "Token inválido ou expirado" });
    }

    req.userId = decoded.userId; // Anexa o userId ao objeto req
    next();
  } catch (error) {
    console.error("Erro no middleware de autenticação:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
