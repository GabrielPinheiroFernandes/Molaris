import User from "../models/user.js"

// Serviço para obter todos os usuários
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error("Erro ao obter os usuários.");
  }
};

// Serviço para criar um usuário
export const createUser = async (name, email, password) => {
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    return newUser;
  } catch (err) {
    throw new Error("Erro ao criar o usuário.");
  }
};

// Serviço para deletar um usuário
export const deleteUser = async (userId) => {
  try {
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      throw new Error("Usuário não encontrado.");
    }
    return result;
  } catch (err) {
    throw new Error("Erro ao deletar o usuário.");
  }
};

// Serviço para apagar todos os usuários
export const deleteAllUsers = async () => {
  try {
    const result = await User.deleteMany({});
    return result;
  } catch (err) {
    throw new Error("Erro ao apagar todos os usuários.");
  }
};