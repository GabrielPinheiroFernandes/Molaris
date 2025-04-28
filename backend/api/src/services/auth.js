import jwt from "jsonwebtoken";
import User from "../models/user.js";

const JWT_SECRET = "e7d4bdb804cd3debe95fa1ba620eed806c192b63bc46efcd137f7c76bedfc516a1c6ce3af490b691644b327fde70030ab10e2ea19052f3c32d1a3fec0945f0c9404053a9e194a3273344e7eb38e693d8e420c969aa73b4810f95635da883722c34cc5584acc457e8642c66cac6dd4571e428cc2dcafe61192e6123a04ac803381d1aef18eca960841037c7745755e80f620de1d9604264bc55991acc653a3e2f8de821d4234831645ebb8684545e9254fbcd6a6253850875fcd0f122de8a3157c59d1e4393f0fec2a8e567534d6084b0e0e291ebeecaa5e5ffe0e901dd391ff15dda676d47be85c93052887e567a953ca37fb719a6407578017617b9ce91aad3";

// Função para gerar o token
export const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

// Função para validar o login
export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Senha incorreta");
  }

  // Gerar o token
  const token = generateToken(user._id);
  return token;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.error("Erro ao verificar token:", err.message); // Log do erro
    return null;
  }
};
