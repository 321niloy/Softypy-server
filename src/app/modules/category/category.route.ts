import express from 'express';
import { categorysControllers } from './category.controller';

const router = express.Router();

router.get('/category', categorysControllers.getcategorys);
router.post('/create-category', categorysControllers.createcategorys);
router.delete('/category/:id', categorysControllers.deletecategorys);
router.put('/category/:id', categorysControllers.updatecategorys);

export const categoryRoutes = router;
