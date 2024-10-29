import express from 'express';
import { itemsRoutes } from '../modules/items/items.route';
import { categoryRoutes } from '../modules/category/category.route';
import { supplierRoutes } from '../modules/suppliers/suppliers.route';
import { customerRoutes } from '../modules/Customers/customers.route';
import { stockRoutes } from '../modules/stock/stock.route';
import { saleorderRoutes } from '../modules/saleorder/saleorder.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/items',
    route: itemsRoutes,
  },
  {
    path: '',
    route: categoryRoutes,
  },
  {
    path: '', // Changed from 'router' to 'route'
    route: supplierRoutes,
  },
  {
    path: '',
    route: customerRoutes,
  },
  {
    path: '',
    route: stockRoutes,
  },
  {
    path: '',
    route: saleorderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// Uncomment these lines if you want to add users and students routes
// router.use('/users', userRoutes);
// router.use('/students', studentRoute);

export default router;
