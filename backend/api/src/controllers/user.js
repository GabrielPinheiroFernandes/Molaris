import * as userService from "../services/user.js";
import * as feedbacks from "../utils/feedbacks.js";
import faker from "faker";

// Controller para criar um usuário com dados aleatórios usando o faker
export const createRandomUser = async (req, res) => {
  const randomName = faker.name.findName(); // Nome aleatório
  const randomEmail = faker.internet.email(); // Email aleatório
  const password = "123456"; // Senha fixa

  try {
    const newUser = await userService.createUser(
      randomName,
      randomEmail,
      password
    );
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso!", user: newUser });
    feedbacks.created("user");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para apagar todos os usuários
export const deleteAllUsers = async (req, res) => {
  try {
    const result = await userService.deleteAllUsers();
    res.json({
      message: "Todos os usuários foram deletados com sucesso.",
      result,
    });
    feedbacks.deleted("users");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para obter todos os usuários
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para criar um usuário
export const createUser = async (req, res) => {
  const { name, email, address, phone } = req.body;

  try {
    const newUser = await userService.createUser(name, email, address, phone);
    res.status(201).json(newUser);
    feedbacks.created("user");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller para deletar um usuário
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await userService.deleteUser(userId);
    res.json({ message: "Usuário deletado com sucesso.", user: result });
    feedbacks.deleted("user");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
