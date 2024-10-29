"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockRoutes = void 0;
const express_1 = __importDefault(require("express"));
const stock_controller_1 = require("./stock.controller");
const router = express_1.default.Router();
router.get('/stocks', stock_controller_1.stockControllers.getstock);
router.post('/createStocks', stock_controller_1.stockControllers.createstock);
router.delete('/stock/:id', stock_controller_1.stockControllers.deletestock);
router.put('/stocks/:id', stock_controller_1.stockControllers.updatestock);
exports.stockRoutes = router;
