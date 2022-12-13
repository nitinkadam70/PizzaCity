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

const createDish = async (req, res) => {
  try {
    let dish = await new DishModel(req.body);
    dish.save((err, success) => {
      if (err) {
        return res
          .status(500)
          .send({ type: 'error', message: 'something went wrong' });
      }
      return res.status(201).send({
        type: 'success',
        message: 'Dish Created Successfully',
      });
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};
const updateDish = () => {};
const deleteDish = () => {};

module.exports = { getDishes, createDish, updateDish, deleteDish };
