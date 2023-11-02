const FoodModel = require('../models/FoodModel.js');

class FoodController {

    static model = new FoodModel();

    async createFood(body)
    {
        let logMessage = { status: 200, message: "Food created with success!" };
        try {
            await FoodController.model.createFood(body).then(response => {});
        } catch (error) {
            console.log("An error occurred: ", error.message);
            logMessage.status = 500;
            logMessage.message = `An error occurred: ${error.message}`
        }
        return logMessage;
    }

}

module.exports = FoodController;