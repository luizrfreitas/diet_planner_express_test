const DatabaseService = require('../../services/DatabaseService.js');

class DietPlannerTable {
    async getFood(data)
    {
        const returnData = await new Promise((resolve, reject) => {
            const selectString = `SELECT * FROM foods_db WHERE name REGEXP "^${data.name}" LIMIT 3;`;
            const dbservice = new DatabaseService();
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
};

module.exports = DietPlannerTable;