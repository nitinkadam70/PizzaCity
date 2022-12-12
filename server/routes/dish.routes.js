const { Router } = require('express');
const {
  getDishes,
  createDish,
  updateDish,
  deleteDish,
} = require('../controllers/dish.controller');

const dishRouter = Router();

//Getting All dishes
dishRouter.get('/allDishes', getDishes);

//post dish
dishRouter.post('/createDish', createDish);

//update dish
dishRouter.patch('/updateDish/:id', updateDish);

//Delete dish
dishRouter.delete('/deleteDish/:id', deleteDish);

module.exports = dishRouter;
