const { Router } = require('express');
const requireAuth = require('../middlewares/requireAuth.middleware');

const offersRouter = Router();

//getting Orders
offersRouter.get('/getOffers', requireAuth,);

//posting Orders
offersRouter.post('/createOffer', requireAuth);

//upadating Orders
offersRouter.patch('/updateOffer/:id', requireAuth);

//Delete Orders
offersRouter.delete('/deleteOffer/:id', requireAuth);

module.exports = offersRouter;
