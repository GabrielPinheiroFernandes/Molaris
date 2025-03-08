import clientsService from "../services/clients.service.js";

// Função para obter todos os clientes
async function getAllClients(req, res) {
  try {
    const clients = await clientsService.getAllClients();
    return res.status(200).json({"message":"Requisição bem ucedida!",'data':clients});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao buscar clientes.", error: error.message });
  }
}

// Função para obter um cliente por ID
async function getIdClient(req, res) {
  const { id } = req.params; // Pega o ID da URL
  try {
    const client = await clientsService.getIdClient(id);
    if (client) {
      return res.status(200).json({"message":"Requisição bem ucedida!",'data':client});
    } else {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao buscar cliente.", error: error.message });
  }
}

// Função para adicionar um cliente
async function addClient(req, res) {
  try {
    // console.log(req.body)
    const newClient = await clientsService.addClient(req.body);
    return res.status(201).json({"message":"Requisição bem ucedida!",'data':newClient});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao adicionar cliente.", error: error.message });
  }
}

// Função para editar um cliente
async function editClient(req, res) {
  const { id } = req.params;
  const clientData = req.body;
  try {
    const updatedClient = await clientsService.editClient(id, clientData);
    if (updatedClient) {
      return res.status(200).json({"message":"Requisição bem ucedida!",'data':updatedClient});
    } else {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao editar cliente.", error: error.message });
  }
}

// Função para deletar um cliente
async function delClient(req, res) {
  const { id } = req.params;
  try {
    const result = await clientsService.delClient(id);
    if (result) {
      return res.status(200).json({"message":"Requisição bem ucedida!",'data':result});
    } else {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao deletar cliente.", error: error.message });
  }
}

export default {
  getAllClients,
  getIdClient,
  addClient,
  editClient,
  delClient,
};
