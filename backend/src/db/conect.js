import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    database: 'CONSULTORIO',
    user: 'root',
    password: '',
    connectionLimit: 5
});

pool.getConnection()
.then((res) => {
    // console.log('success', res);
})
.catch((err) => {
    console.log('erro na conexão', err);
});

async function executeQuery(query,params) {
    let conn;
    try {
      // Obtém a conexão
      conn = await pool.getConnection();
  
      // Faz uma inserção
      const res = await conn.query(query,params);
      // console.log(res); 
      return res
  
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      // Libera a conexão para o pool
      if (conn) conn.release();
    }
  }
  
  // // Chame a função
  // asyncFunction();
  
  
  export default {executeQuery}