import mysql from "mysql2"


const pool = mysql.createPool({
    host: 'proxysql',
    port: '6033',
    user: 'root',
    password: 'pass',
    database: 'vot'
}).promise()

export default pool