import conect from "../db/conect.js";

async function getAllDoctor() {
  const sql = "select * from DOUTOR;";

  const doctors = await conect.executeQuery(sql, []);

  console.log(doctors);
  if (doctors && doctors.length > 0) {
    return doctors;
  } else {
    return [];
  }
}

async function getIdDoctor(id) {
  console.log("ID PASSADO PELA REQUISIÇÂO=>", id);
  const sql = "select * from DOUTOR where CODIGO = ?";

  const doctors = await conect.executeQuery(sql, [id]);

  console.log(doctors);
  if (doctors && doctors.length > 0) {
    return doctors;
  } else {
    return [];
  }
}

async function addDoctor(
  ID_USER,
  NOME,
  CRM,
  HORA_ENTRADA,
  HORA_SAIDA,
  OBSERVACAO
) {
  const sql =
    "INSERT INTO `doutor` (`ID_USER`, `NOME`, `CRM`, `HORA_ENTRADA`, `HORA_SAIDA`, `OBSERVACAO`) VALUES (?, ?, ?, ?, ?, ?);";

  try {
    const doctors = await conect.executeQuery(sql, [
      ID_USER,
      NOME,
      CRM,
      HORA_ENTRADA,
      HORA_SAIDA,
      OBSERVACAO,
    ]);

    try {
      const CODIGO = Number(doctors.insertId);

      if (Number.isInteger(CODIGO)) {
        return {
          CODIGO,
          ID_USER,
          NOME,
          CRM,
          HORA_ENTRADA,
          HORA_SAIDA,
          OBSERVACAO,
        };
      }
      return null;
    } catch {
      return null;
    }
  } catch (error) {
    console.error("Erro ao adicionar doutor:", error);
    return null;
  }
}

async function editDoctor(id) {
  console.log("ID PASSADO PELA REQUISIÇÂO=>", id);
  const sql = "select * from DOUTOR where CODIGO = ?";

  const doctors = await conect.executeQuery(sql, [id]);

  console.log(doctors);
  if (doctors && doctors.length > 0) {
    return doctors;
  } else {
    return [];
  }
}

async function delDoctor(id) {
  console.log("ID PASSADO PELA REQUISIÇÂO=>", id);
  const sql = "DELETE FROM DOUTOR where CODIGO = ?";

  const doctors = await conect.executeQuery(sql, [id]);

  console.log(doctors);
  try {
    if (doctors.affectedRows > 0) {
      return { id };
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

export default { getAllDoctor, getIdDoctor, addDoctor, editDoctor, delDoctor };
