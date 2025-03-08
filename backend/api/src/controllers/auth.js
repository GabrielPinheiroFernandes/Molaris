import { login } from "../services/auth.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
