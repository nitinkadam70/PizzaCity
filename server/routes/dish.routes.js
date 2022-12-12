const { Router } = require('express');
const {
  getDishes,
  createDish,
  editDish,
  deleteDish,
} = require('../controllers/dish.controller');

const dishRouter = Router();

//Getting All dishes
dishRouter.get('/allDishes', getDishes);

//post dish
dishRouter.post('/createDish', createDish);

//Edit dish
dishRouter.patch('/editDish', editDish);

//Delete dish
dishRouter.delete('/deleteDish', deleteDish);

module.exports = { dishRouter };
