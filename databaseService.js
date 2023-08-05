const pool = require('./databaseConnection');

async function accountCreate(body){
    const {firstname,lastname,email,username,password} = body;
    const connection = await pool.connect();
    const query = {
        text: 'insert into account (firstname,lastname,email,username,password) values ($1,$2,$3,$4,$5)',
        values: [firstname,lastname,email,username,password]
    }
    const result = await connection.query(query);
    const resultRows = result.rows;
    connection.release();
    return resultRows;
}