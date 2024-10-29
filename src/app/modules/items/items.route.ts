import express from 'express';
import { itemsControllers } from './items.controller';

const router = express.Router();

router.get('/items', itemsControllers.getItems);
router.post('/createitem', itemsControllers.createitems);
router.delete('/item/:id', itemsControllers.deleteitems);
router.put('/item/:id', itemsControllers.updateitems);

export const itemsRoutes = router;
