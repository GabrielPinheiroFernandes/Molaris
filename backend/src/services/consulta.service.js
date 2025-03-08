import consultaRepository from "../repository/consulta.repository.js";

// Função para obter todas as consultas
async function getAllconsultas() {
    return await consultaRepository.getAllconsultas();
}

// Função para obter todos os clientes de um doutor específico
async function getClientsByDoctor(doctorId) {
    return await consultaRepository.getClientsByDoctor(doctorId);
}

// Função para obter todos os doutores de um cliente específico
async function getDoctorsByClient(clientId) {
    return await consultaRepository.getDoctorsByClient(clientId);
}

// Função para criar uma nova consulta (associar um cliente a um doutor)
async function addConsulta(doctorId, clientId, dataConsulta, observacao = null, STATUS) {
    return await consultaRepository.addConsulta(doctorId, clientId, dataConsulta, observacao, STATUS);
}


// Função para deletar uma consulta (desassociar um cliente de um doutor)
async function delConsulta(consultaId) {
    return await consultaRepository.delConsulta(consultaId);
}
// Função para deletar uma consulta (desassociar um cliente de um doutor)
async function putConsulta(consultaId,data) {
    return await consultaRepository.putConsulta(consultaId,data);
}

export default {
    getAllconsultas,
    getClientsByDoctor,
    getDoctorsByClient,
    addConsulta,
    delConsulta,
    putConsulta,
};
