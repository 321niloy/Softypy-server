import express from 'express';
import { stockControllers } from './stock.controller';

const router = express.Router();

router.get('/stocks', stockControllers.getstock);
router.post('/createStocks', stockControllers.createstock);
router.delete('/stock/:id', stockControllers.deletestock);
router.put('/stocks/:id', stockControllers.updatestock);

export const stockRoutes = router;
