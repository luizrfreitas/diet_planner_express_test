const DatabaseService = require('../services/DatabaseService.js');

class FoodModel {

    static db = new DatabaseService();
    
    async createFood(data)
    {
        const returnData = await new Promise((resolve, reject) => {
            const row =
                `INSERT INTO foods (name, base_weight, kcal, car, pro, fat)
                VALUES ("${data.name}", ${data.base_weight}, ${data.kcal}, ${data.car}, ${data.pro}, ${data.fat});`;
            FoodModel.db.getConnection.query(row, (err, results, fields) => {
                resolve(results);
            });
        }, 3000);
        return returnData;
    }

    async deleteFood(data)
    {
        //WON'T DELETE DUE TO FOREIGN KEY. MUST UPDATE THE TABLE TO HAVE DELETED COLUMN
        const returnData = await new Promise((resolve, reject) => {
            const row =
                `DELETE FROM foods WHERE id = ${data.id};`;
            FoodModel.db.getConnection.query(row, (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        }, 3000);
        return returnData;
    }

    async editFood(data)
    {

        
        return;
        const returnData = await new Promise((resolve, reject) => {
            const row =
                `UPDATE foods (name, base_weight, kcal, car, pro, fat)
                VALUES (${data.name}, ${data.base_weight}, ${data.kcal}, ${data.car}, ${data.pro}, ${data.fat});`;
            FoodModel.db.getConnection.query(row, (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        }, 3000);
        return returnData;
    }

    async getFood(data)
    {
        const returnData = await new Promise((resolve, reject) => {
            const selectString = `SELECT * FROM foods WHERE name REGEXP "^${data.name}" LIMIT 3;`;
            const dbservice = this.db;
            dbservice.getConnection
            .query(
                selectString,
                (err, results, fields) => {
                    resolve(results);
                }
            );
        });
        return returnData;
    }
}

module.exports = FoodModel;