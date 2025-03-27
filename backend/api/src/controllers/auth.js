import { login,register } from "../services/auth.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const registerController = async (req, res) => {
  const userData = req.body;
  try {
    const token = await register(userData);
    res.json(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
