import express from 'express';
import { customersControllers } from './customers.controller';

const router = express.Router();

router.get('/customer', customersControllers.getcustomers);
router.post('/create-customer', customersControllers.createcustomers);
router.delete('/customer/:id', customersControllers.deletecustomers);
router.put('/customers/:id', customersControllers.updatecustomers);

export const customerRoutes = router;
