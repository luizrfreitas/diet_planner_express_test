const dotenv = require('dotenv').config({ path: '../.env'});
const mysql = require('mysql2');

class DatabaseService {
    constructor() {
        this._connection = mysql.createConnection({
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE
        });

        if (!DatabaseService.instance) {
            DatabaseService.instance = this;
        }
        return DatabaseService.instance;
    }

    get getConnection()
    {
        return this._connection;
    }
};

module.exports = DatabaseService;