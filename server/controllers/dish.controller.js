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

//adding Dishes
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

//updating Dishes
const updateDish = async (req, res) => {
  try {
    const _id = req.params.id;
    const update_Dish = await DishModel.findByIdAndUpdate(
      _id,
      req.body
    );
    await update_Dish.save();
    return res.send({
      type: 'success',
      message: 'Dish updated successfully!',
    });
  } catch (error) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};
const deleteDish = () => {};

module.exports = { getDishes, createDish, updateDish, deleteDish };
