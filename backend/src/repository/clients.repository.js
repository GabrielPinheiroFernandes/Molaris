import conect from "../db/conect.js";

// Função para pegar todos os clientes
async function getAllClients() {
  const sql = "SELECT * FROM paciente;";
  const clients = await conect.executeQuery(sql, []);
  return clients || [];
}

// Função para pegar um cliente por ID
async function getIdClient(id) {
  const sql = "SELECT * FROM paciente WHERE CODIGO = ?;";
  const clients = await conect.executeQuery(sql, [id]);
  return clients && clients.length > 0 ? clients[0] : null; // Retorna o primeiro cliente ou null se não encontrado
}

// Função para adicionar um novo cliente
async function addClient(clientData) {
  const { ID_USER,NOME, DATA_NASCIMENTO, SEXO, PLANO_SAUDE, OBSERVACAO } =
    clientData;

  const sql = `INSERT INTO paciente ( ID_USER,NOME, DATA_NASCIMENTO, SEXO,  PLANO_SAUDE, OBSERVACAO) 
                 VALUES ( ? ,?, ?, ?, ?, ?);`;

  const result = await conect.executeQuery(sql, [
    ID_USER,
    NOME,
    DATA_NASCIMENTO,
    SEXO,
    PLANO_SAUDE,
    OBSERVACAO,
  ]);


  console.log(result)
  const CODIGO = BigInt(result.insertId).toString();
  return result
    ? { ID_USER,CODIGO, NOME, DATA_NASCIMENTO, SEXO,  PLANO_SAUDE, OBSERVACAO }
    : null;
}

// Função para editar um cliente
async function editClient(id, clientData) {
  const { NOME, DATA_NASCIMENTO, SEXO, PLANO_SAUDE, OBSERVACAO } =
    clientData;

  const sql = `UPDATE paciente 
                 SET  NOME = ?, DATA_NASCIMENTO = ?, SEXO = ?,  PLANO_SAUDE = ?, OBSERVACAO = ? 
                 WHERE CODIGO = ?;`;

  const result = await conect.executeQuery(sql, [
    NOME,
    DATA_NASCIMENTO,
    SEXO,
    PLANO_SAUDE,
    OBSERVACAO,
    id,
  ]);

  return result && result.affectedRows > 0
    ? { id, NOME, DATA_NASCIMENTO, SEXO, PLANO_SAUDE, OBSERVACAO }
    : null;
}

// Função para deletar um cliente
async function delClient(id) {
  const sql = "DELETE FROM paciente WHERE CODIGO = ?;";
  const result = await conect.executeQuery(sql, [id]);
  return result && result.affectedRows > 0
    ? { message: `Cliente ${id} deletado com sucesso!` }
    : null;
}

export default {
  getAllClients,
  getIdClient,
  addClient,
  editClient,
  delClient,
};
