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
  const sql = "select * from user where ID = ?";

  const user = await conect.executeQuery(sql, [id]);

  console.log(user);
  if (user && user.length > 0) {
    return user;
  } else {
    return [];
  }
}

async function adduser(EMAIL, PASSWORD) {
  const sql = "INSERT INTO `user` ( `EMAIL`, `PASSWORD`) VALUES (?, ?);";

  const user = await conect.executeQuery(sql, [EMAIL, PASSWORD]);

  try {
    const ID = Number(user.insertId);
    return user ? { ID, EMAIL, PASSWORD } : null;
  } catch {
    return null;
  }
}

async function edituser(ID, EMAIL, PASSWORD, TOKEN) {
  console.log("EMAIL PASSADO PELA REQUISIÇÃO =>", EMAIL);

  // Alterei a consulta SQL para realizar o UPDATE com base no EMAIL
  const sql = "UPDATE user SET EMAIL = ?, PASSWORD = ?, TOKEN = ? WHERE ID = ?";

  // Executa a consulta com os parâmetros PASSWORD, TOKEN e EMAIL
  const result = await conect.executeQuery(sql, [EMAIL, PASSWORD, TOKEN, ID]);

  // Verifica se a atualização foi bem-sucedida
  console.log(result)
  try{
    if (result.affectedRows > 0) {
      return { ID, EMAIL, PASSWORD, TOKEN };
    } else {
      null
    }
  } catch {
    return null;
  }
}

async function deluser(id) {
  console.log("ID PASSADO PELA REQUISIÇÂO=>", id);
  const sql = "DELETE from user where ID = ?";

  const user = await conect.executeQuery(sql, [id]);

  console.log(user);
  try{
    if (user.affectedRows > 0) {
      return {id};
    } else {
      return null
    }
  } catch {
    return null;
  }
}

export default { getAlluser, getIduser, adduser, edituser, deluser };

