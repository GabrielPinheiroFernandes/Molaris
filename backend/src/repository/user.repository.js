import conect from "../db/conect.js";

async function getAlluser() {
  const sql = "select * from user;";

  const user = await conect.executeQuery(sql, []);

  console.log(user);
  if (user && user.length > 0) {
    return user;
  } else {
    return [];
  }
}

async function getIduser(id) {
  console.log("ID PASSADO PELA REQUISIÇÂO=>", id);
  const sql = "select * from user where CODIGO = ?";

  const user = await conect.executeQuery(sql, [id]);

  console.log(user);
  if (user && user.length > 0) {
    return user;
  } else {
    return [];
  }
}

async function adduser(EMAIL,PASSWORD) {
  const sql =
    "INSERT INTO `user` ( `EMAIL`, `PASSWORD`) VALUES (?, ?);";

  const user = await conect.executeQuery(sql, [
    EMAIL,
    PASSWORD,
  ]);

  try {
    const CODIGO = Number(user.insertId);
    return user
    ? { CODIGO, EMAIL,PASSWORD }
    : null;
  } catch {
    return null
  }

}


async function edituser(ID,EMAIL, PASSWORD, TOKEN) {
    console.log("EMAIL PASSADO PELA REQUISIÇÃO =>", EMAIL);

    // Alterei a consulta SQL para realizar o UPDATE com base no EMAIL
    const sql = "UPDATE user SET EMAIL = ?, PASSWORD = ?, TOKEN = ? WHERE ID = ?";

    try {
        // Executa a consulta com os parâmetros PASSWORD, TOKEN e EMAIL
        const result = await conect.executeQuery(sql, [EMAIL,PASSWORD, TOKEN, ID]);

        // Verifica se a atualização foi bem-sucedida
        if (result.affectedRows > 0) {
            return {ID,EMAIL,PASSWORD,TOKEN};
        } else {
            return { message: "Nenhum usuário encontrado com esse ID" };
        }
    } catch (error) {
        return []
    }
}
  

async function deluser(id) {
  console.log("ID PASSADO PELA REQUISIÇÂO=>", id);
  const sql = "select * from user where CODIGO = ?";

  const user = await conect.executeQuery(sql, [id]);

  console.log(user);
  if (user && user.length > 0) {
    return user;
  } else {
    return [];
  }
}

export default { getAlluser, getIduser, adduser, edituser, deluser };
