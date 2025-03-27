import jwt from "jsonwebtoken";
import RefreshToken from "../models/refreshToken.js";
import User from "../models/user.js";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

export const generateAccessToken = (userId) => {
  const uniqueIdentifier = uuidv4();
  return jwt.sign({ userId, uniqueIdentifier }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const generateRefreshToken = async (userId) => {
  const uniqueIdentifier = uuidv4();
  const token = jwt.sign({ userId, uniqueIdentifier }, REFRESH_SECRET, {
    expiresIn: "7d",
  });
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await RefreshToken.create({ token, userId, expiresAt });

  return token;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.error("Erro ao verificar token:", err.message);
    return null;
  }
};

export const verifyRefreshToken = async (token) => {
  try {
    const decoded = jwt.verify(token, REFRESH_SECRET);

    const storedToken = await RefreshToken.findOne({ token });
    if (!storedToken || storedToken.expiresAt < new Date()) {
      throw new Error("Refresh token inválido ou expirado.");
    }

    return decoded.userId;
  } catch (err) {
    throw new Error("Erro ao validar o refresh token.");
  }
};

export const deleteRefreshToken = async (token) => {
  await RefreshToken.findOneAndDelete({ token });
};

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuário não encontrado.");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Senha incorreta.");

  const accessToken = generateAccessToken(user._id);
  const refreshToken = await generateRefreshToken(user._id);

  return { accessToken, refreshToken };
};

export const getAllRefreshTokens = async () => {
  try {
    const refreshTokens = await RefreshToken.find();
    return refreshTokens;
  } catch (err) {
    throw new Error("Erro ao obter os refresh tokens.");
  }
};
