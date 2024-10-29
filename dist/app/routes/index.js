"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_route_1 = require("../modules/items/items.route");
const category_route_1 = require("../modules/category/category.route");
const suppliers_route_1 = require("../modules/suppliers/suppliers.route");
const customers_route_1 = require("../modules/Customers/customers.route");
const stock_route_1 = require("../modules/stock/stock.route");
const saleorder_route_1 = require("../modules/saleorder/saleorder.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/items',
        route: items_route_1.itemsRoutes,
    },
    {
        path: '',
        route: category_route_1.categoryRoutes,
    },
    {
        path: '', // Changed from 'router' to 'route'
        route: suppliers_route_1.supplierRoutes,
    },
    {
        path: '',
        route: customers_route_1.customerRoutes,
    },
    {
        path: '',
        route: stock_route_1.stockRoutes,
    },
    {
        path: '',
        route: saleorder_route_1.saleorderRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
// Uncomment these lines if you want to add users and students routes
// router.use('/users', userRoutes);
// router.use('/students', studentRoute);
exports.default = router;
