import doctorService from "../services/doctor.service.js";

async function getAllDoctor(req, res) {
  const doctors = await doctorService.getAllDoctor();
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function getIdDoctor(req, res) {
  const doctors = await doctorService.getIdDoctor(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function addDoctor(req, res) {
  try {
    // Chama a função para adicionar o médico
    const doctors = await doctorService.addDoctor(req.body);

    // Verifica se o médico foi adicionado corretamente
    if (doctors != null) {
      return res.status(200).json({ "message": "Requisição bem-sucedida!", 'data': doctors });
    } else {
      // Caso o retorno seja null (não foi possível adicionar), envia uma resposta de erro
      return res.status(400).json({ "message": "Não foi possível adicionar o médico", 'data': doctors });
    }
  } catch (error) {
    // Se ocorrer algum erro na execução, por exemplo, problemas no banco de dados
    console.error("Erro ao adicionar médico:", error);
    return res.status(500).json({ "message": "Erro interno ao tentar adicionar médico", error: error.message });
  }
}


async function editDoctor(req, res) {
  const doctors = await doctorService.editDoctor(req.params.id);
  return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
}

async function delDoctor(req, res) {
  const doctors = await doctorService.delDoctor(req.params.id);
 
  if (users != null) {
    return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
  } else {
    return res.status(500).json({"message": "Algo deu errado com a edição no banco!", 'data': doctors});
  }
}

export default { getAllDoctor, getIdDoctor, addDoctor, editDoctor, delDoctor };
