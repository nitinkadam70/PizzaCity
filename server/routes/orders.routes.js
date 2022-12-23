const { Router } = require('express');

const orderRouter = Router();

//getting Orders
orderRouter.get('/getOrders');

//posting Orders
orderRouter.post('/createOrder');

//upadating Orders
orderRouter.patch('/updateOrder/:id');

//Delete Orders
orderRouter.delete('/deleteOrder/:id');
