import clientsRepository from "../repository/clients.repository.js";

// Função para obter todos os clientes
async function getAllClients() {
  return await clientsRepository.getAllClients();
}

// Função para obter um cliente por ID
async function getIdClient(id) {
  return await clientsRepository.getIdClient(id);
}

// Função para adicionar um cliente
async function addClient(clientData) {
  return await clientsRepository.addClient(clientData);
}

// Função para editar um cliente
async function editClient(id, clientData) {
  return await clientsRepository.editClient(id, clientData);
}

// Função para deletar um cliente
async function delClient(id) {
  return await clientsRepository.delClient(id);
}

export default {
  getAllClients,
  getIdClient,
  addClient,
  editClient,
  delClient,
};
