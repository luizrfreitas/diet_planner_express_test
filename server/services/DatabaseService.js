const dotenv = require('dotenv').config({ path: '../.env'});
const mysql = require('mysql2');

class DatabaseService {
    static connection = mysql.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    });
};

module.exports = DatabaseService;