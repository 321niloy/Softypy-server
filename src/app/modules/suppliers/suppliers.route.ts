import express from 'express';
import { suppliersControllers } from './suppliers.controller';

const router = express.Router();

router.get('/supplier', suppliersControllers.getsuppliers);
router.post('/create-supplier', suppliersControllers.createsuppliers);
router.delete('/suppliers/:id', suppliersControllers.deletesuppliers);
router.put('/supplier/:id', suppliersControllers.updatesuppliers);

export const supplierRoutes = router;
