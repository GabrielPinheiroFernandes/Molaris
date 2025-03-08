import conect from "../db/conect.js";

// Função para pegar todas as consultas

async function getAllconsultas() {
    const sql = `
        SELECT c.*
        FROM consulta c
        LEFT JOIN doutor d ON c.doutor_CODIGO = d.CODIGO
        LEFT JOIN paciente p ON c.Paciente_CODIGO = p.CODIGO;
    `;
    const consultas = await conect.executeQuery(sql, []);
    return consultas || [];
}

// Função para pegar todos os clientes de um doutor específico
async function getClientsByDoctor(doctorId) {
    const sql = `
        SELECT c.*
        FROM consulta c
        LEFT JOIN paciente p ON c.Paciente_CODIGO = p.CODIGO
        WHERE c.doutor_CODIGO = ?;
    `;
    const clients = await conect.executeQuery(sql, [doctorId]);
    return clients || [];
}

// Função para pegar todos os doutores de um cliente específico
async function getDoctorsByClient(clientId) {
    const sql = `
        SELECT c.*
        FROM consulta c
        LEFT JOIN doutor d ON c.doutor_CODIGO = d.CODIGO
        WHERE c.Paciente_CODIGO = ?;
    `;
    const doctors = await conect.executeQuery(sql, [clientId]);
    return doctors || [];
}

// Função para criar uma nova consulta
async function addConsulta(doctorId, clientId, dataConsulta, observacao = null, STATUS) {
    const sql = `
        INSERT INTO consulta (doutor_CODIGO, Paciente_CODIGO, DATA_CONSULTA, OBSERVACAO_MEDICA, STATUS)
        VALUES (?, ?, ?, ?, ?);
    `;
    const result = await conect.executeQuery(sql, [doctorId, clientId, dataConsulta, observacao, STATUS]);

    return result.insertId
        ? {
              CODIGO: BigInt(result.insertId).toString(),
              doutor_CODIGO: doctorId,
              Paciente_CODIGO: clientId,
              DATA_CONSULTA: dataConsulta,
              OBSERVACAO: observacao,
              STATUS: STATUS,
          }
        : null;
}


// Função para deletar uma consulta
async function delConsulta(consultaId) {
    const sql = `
        DELETE FROM consulta 
        WHERE COD = ? ;
    `;
    const result = await conect.executeQuery(sql, [consultaId]);
    return result && result.affectedRows > 0
        ? { message: `Consulta ${consultaId} removida com sucesso!` }
        : null;
}
// Função para deletar uma consulta
async function putConsulta(consultaId, data) {
    // console.log(data)


    const { dataConsulta, STATUS, observacao } = data;  // Desestruturando as propriedades de 'data'

    const sql = `
        UPDATE consulta
        SET DATA_CONSULTA = ?, STATUS = ?, OBSERVACAO_MEDICA = ?
        WHERE COD = ?;
    `;

    const result = await conect.executeQuery(sql, [dataConsulta, STATUS, observacao, consultaId]);

    return result && result.affectedRows > 0
        ? { message: `Consulta ${consultaId} atualizada com sucesso!` }
        : null;
}


export default {
    getAllconsultas,
    getClientsByDoctor,
    getDoctorsByClient,
    addConsulta,
    delConsulta,
    putConsulta,
};
