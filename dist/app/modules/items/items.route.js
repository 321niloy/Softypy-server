"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const items_controller_1 = require("./items.controller");
const router = express_1.default.Router();
router.get('/items', items_controller_1.itemsControllers.getItems);
router.post('/createitem', items_controller_1.itemsControllers.createitems);
router.delete('/item/:id', items_controller_1.itemsControllers.deleteitems);
router.put('/item/:id', items_controller_1.itemsControllers.updateitems);
exports.itemsRoutes = router;
