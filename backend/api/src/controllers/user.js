import * as userService from "../services/user.js";
import * as feedbacks from "../utils/feedbacks.js";
import faker from "faker";

export const createRandomUser = async (req, res) => {
  const randomName = faker.person.fullName(); // Novo padrão do faker 7+
  const randomEmail = faker.internet.email();
  const password = "123456"; // Senha fixa

  try {
    const newUser = await userService.createUser(
      randomName,
      randomEmail,
      null, // address
      null, // phone
      null, // birthDate
      null, // gender
      "Cliente", // role padrão para usuários aleatórios
      null, // profilePicture
      password // password
    );

    res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });
    feedbacks.created("user");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao criar usuário." });
  }
};


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

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  const { fullName, email, phone, address, birthDate, gender, role, profilePicture, password } = req.body;

  try {
    // Passando todos os dados para o service
    const newUser = await userService.createUser(fullName, email, address, phone, birthDate, gender, role, profilePicture, password);
    res.status(201).json(newUser);
    feedbacks.created("user");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
