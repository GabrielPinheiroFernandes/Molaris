import * as userService from "../services/user.js";
import * as feedbacks from "../utils/feedbacks.js";
import faker from "faker";

export const createRandomUser = async (req, res) => {
  const randomName = faker.name.findName();
  const randomEmail = faker.internet.email();
  const password = "123"; // senha fixa padrão

  try {
    const newUser = await userService.createUser(
      randomName,
      randomEmail,
      {
        street: "Rua Fake",
        number: "123",
        neighborhood: "Bairro",
        city: "Cidade",
        state: "UF",
        zip: "00000-000",
      }, // address
      "999999999", // phone
      new Date("2000-01-01"), // birthDate
      "Outro", // gender
      "Médico", // role
      null, // profilePicture
      password,
      "123456-CRM", // crm
      "Clínico Geral", // specialty
      "Universidade X", // education
      new Date("2015-01-01"), // professionStartDate
      "Clínica Y", // clinic
      ["Segunda 08:00-12:00", "Terça 14:00-18:00"] // schedule
    );

    res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });
    feedbacks.created("user");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao criar usuário." });
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
    feedbacks.deletareleted("user");
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


// Controller para deletar um usuário
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await userService.deleteUser(userId);
    res.json({ message: "Usuário deletado com sucesso.", user: result });
    feedbacks.deletareleted("user");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};