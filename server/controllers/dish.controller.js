const DishModel = require('../model/DishSchema');

//getting Dishes
const getDishes = async (req, res) => {
  try {
    let dishes = await DishModel.find();
    return res.status(200).send({ type: 'success', data: dishes });
  } catch (e) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};

const createDish = () => {};
const updateDish = () => {};
const deleteDish = () => {};

module.exports = { getDishes, createDish, updateDish, deleteDish };
