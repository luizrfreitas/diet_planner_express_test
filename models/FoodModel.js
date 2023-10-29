const DatabaseService = require('../services/DatabaseService.js');

class FoodModel {

    static db = new DatabaseService();
    
    async createFood(data)
    {
        try {
            const returnData = await new Promise((resolve, reject) => {
                const row =
                    `INSERT INTO foods (name, base_weight, kcal, car, pro, fat)
                    VALUES ("${data.name}", ${data.base_weight}, ${data.kcal}, ${data.car}, ${data.pro}, ${data.fat});`;
                FoodModel.db.getConnection.query(row, (err, results, fields) => {
                    resolve(results);
                });
            }, 3000);
            return returnData;
        } catch (error) {
            return error;
        }
    }

    async deleteFood(data)
    {
        return null;
    }

    async editFood(data)
    {
        return null;
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