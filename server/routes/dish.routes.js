const { Router } = require('express');
const {
  getDishes,
  createDish,
  updateDish,
  deleteDish,
} = require('../controllers/dish.controller');

const requireAuth = require('../middlewares/requireAuth.middleware');

const dishRouter = Router();

//Getting All dishes
dishRouter.get('/allDishes', getDishes);

//post dish
dishRouter.post('/createDish', requireAuth, createDish);

//update dish
dishRouter.patch('/updateDish/:id', requireAuth, updateDish);

//Delete dish
dishRouter.delete('/deleteDish/:id', requireAuth, deleteDish);

module.exports = dishRouter;
