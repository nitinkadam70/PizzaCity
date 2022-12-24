const { Router } = require('express');

const offersRouter = Router();

//getting Orders
offersRouter.get('/getOffers');

//posting Orders
offersRouter.post('/createOffer');

//upadating Orders
offersRouter.patch('/updateOffer/:id');

//Delete Orders
offersRouter.delete('/deleteOffer/:id');

module.exports = offersRouter;
