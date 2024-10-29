"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleorderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const saleorder_controller_1 = require("./saleorder.controller");
const router = express_1.default.Router();
router.get('/sales', saleorder_controller_1.saleorderControllers.getsaleorder);
router.post('/create-sales', saleorder_controller_1.saleorderControllers.createsaleorder);
router.delete('/salesOrder/:id', saleorder_controller_1.saleorderControllers.deletesaleorder);
router.put('/sales/:id', saleorder_controller_1.saleorderControllers.updatesaleorder);
exports.saleorderRoutes = router;
