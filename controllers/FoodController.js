const FoodModel = require('../models/FoodModel.js');

class FoodController {

    static model = new FoodModel();

    async createFood()
    {
        try {
            const data = {
                name: "Leite Integral",
                base_weight: 100,
                kcal: 200,
                car: 20,
                pro: 20,
                fat: 20
            }
            await FoodController.model.createFood(data).then(response => {});
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = FoodController;