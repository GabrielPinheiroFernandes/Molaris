import {
  login,
  verifyRefreshToken,
  generateAccessToken,
  deleteRefreshToken,
  getAllRefreshTokens,
} from "../services/auth.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { accessToken, refreshToken } = await login(email, password);
    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const refreshTokenController = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const userId = await verifyRefreshToken(refreshToken);
    const accessToken = generateAccessToken(userId);

    res.json({ accessToken });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const logoutController = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    await deleteRefreshToken(refreshToken);
    res.json({ message: "Deslogado com sucesso." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllRefreshTokensController = async (req, res) => {
  try {
    const refreshTokens = await getAllRefreshTokens();
    res.status(200).json(refreshTokens);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
