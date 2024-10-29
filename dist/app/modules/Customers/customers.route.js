"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customers_controller_1 = require("./customers.controller");
const router = express_1.default.Router();
router.get('/customer', customers_controller_1.customersControllers.getcustomers);
router.post('/create-customer', customers_controller_1.customersControllers.createcustomers);
router.delete('/customer/:id', customers_controller_1.customersControllers.deletecustomers);
router.put('/customers/:id', customers_controller_1.customersControllers.updatecustomers);
exports.customerRoutes = router;
