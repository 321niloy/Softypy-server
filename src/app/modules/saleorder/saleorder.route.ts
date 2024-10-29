import express from 'express';
import { saleorderControllers } from './saleorder.controller';

const router = express.Router();

router.get('/sales', saleorderControllers.getsaleorder);
router.post('/create-sales', saleorderControllers.createsaleorder);
router.delete('/salesOrder/:id', saleorderControllers.deletesaleorder);
router.put('/sales/:id', saleorderControllers.updatesaleorder);

export const saleorderRoutes = router;
