import consultaService from "../services/consulta.service.js";

// Função para listar todas as associações entre doutores e clientes
async function getAllconsultas(req, res) {
    try {
        const consultas = await consultaService.getAllconsultas();
        return res.status(200).json({"message":"Requisição bem ucedida!",'data':consultas});
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar consultas.", error: error.message });
    }
}

// Função para listar todos os clientes de um doutor específico
async function getClientsByDoctor(req, res) {
    const { id } = req.params; // ID do doutor
    try {
        const clients = await consultaService.getClientsByDoctor(id);
        if (clients.length) {
            return res.status(200).json({"message":"Requisição bem ucedida!",'data':clients});
        } else {
            return res.status(404).json({ message: "Nenhum cliente encontrado para este doutor." });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar clientes do doutor.", error: error.message });
    }
}

// Função para listar todos os doutores de um cliente específico
async function getDoctorsByClient(req, res) {
    const { id } = req.params; // ID do cliente
    try {
        const doctors = await consultaService.getDoctorsByClient(id);
        if (doctors.length) {
            return res.status(200).json({"message":"Requisição bem ucedida!",'data':doctors});
        } else {
            return res.status(404).json({ message: "Nenhum doutor encontrado para este cliente." });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar doutores do cliente.", error: error.message });
    }
}

// Função para criar uma nova consulta (associar um cliente a um doutor)
async function addConsulta(req, res) {
    try {
        // Desestruturação dos parâmetros necessários do corpo da requisição
        const { doctorId, clientId, dataConsulta, observacao = null, STATUS } = req.body;

        // Chamada para a função de serviço que vai interagir com o repositório
        const newConsulta = await consultaService.addConsulta(doctorId, clientId, dataConsulta, observacao, STATUS);

        // Retorna o resultado da criação da consulta
        return res.status(201).json(newConsulta);
    } catch (error) {
        // Caso ocorra erro, retorna o erro com uma mensagem
        return res.status(500).json({ message: "Erro ao criar consulta.", error: error.message });
    }
}


// Função para deletar uma consulta (desassociar um cliente de um doutor)
async function delConsulta(req, res) {
    const { consultaId } = req.params; // IDs da consulta
    try {
        const result = await consultaService.delConsulta(consultaId);
        if (result) {
            return res.status(200).json({"message":"Requisição bem ucedida!",'data':{ message: "Consulta removida com sucesso." }});
        } else {
            return res.status(404).json({ message: "Consulta não encontrada." });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao remover consulta.", error: error.message });
    }
}
// Função para deletar uma consulta (desassociar um cliente de um doutor)
async function putConsulta(req, res) {
    const data = req.body
    // console.log(data)
    const { consultaId } = req.params; // IDs da consulta
    try {
        const result = await consultaService.putConsulta(consultaId,data);
        if (result) {
            return res.status(200).json({"message":"Requisição bem ucedida!",'data':{ message: "Consulta editada com sucesso." }});
        } else {
            return res.status(404).json({ message: "Consulta não encontrada." });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao editadar consulta.", error: error.message });
    }
}

export default {
    getAllconsultas,
    getClientsByDoctor,
    getDoctorsByClient,
    addConsulta,
    delConsulta,
    putConsulta,
};
