const DishModel = require('../model/DishSchema');


//getting Dishes
const getDishes = async (req, res) => {
  const page = req.query._page || 1;
  const limit = req.query._limit || 10;
  const sortField = req.query._sort;
  const sortOrder = req.query._order === 'asc' ? 1 : -1;
  const filter = req.query.type;
  const search = req.query.q;

  try {
    //filter
    const query = {};
    if (filter) {
      query.type = filter;
    }
    if (search) {
      query.$text = { $search: search };
    }
    console.log(query);

    let dishes = await DishModel.find(query)
      .sort({ [sortField]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec((err, items) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send({ type: 'success', data: items });
      });

    //return res.status(200).send({ type: 'success', data: dishes });
  } catch (e) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};

//adding Dish
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

//updating Dish
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
      message: 'Dish updateded successfully!',
    });
  } catch (error) {
    return res
      .status(500)
      .json({ type: 'error', message: 'Internal Error Occured' });
  }
};

//Delete Dish
const deleteDish = async (req, res) => {
  const _id = req.params.id;
  try {
    const delete_Dish = await DishModel.deleteOne(_id, {});
    return res.send({
      type: 'success',
      message: 'Dish deleted successfully!',
    });
  } catch (error) {
    return res.status(500).json({
      type: 'error',
      message: 'Internal Error Occured',
    });
  }
};

module.exports = { getDishes, createDish, updateDish, deleteDish };
