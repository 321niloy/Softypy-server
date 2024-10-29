"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.get('/category', category_controller_1.categorysControllers.getcategorys);
router.post('/create-category', category_controller_1.categorysControllers.createcategorys);
router.delete('/category/:id', category_controller_1.categorysControllers.deletecategorys);
router.put('/category/:id', category_controller_1.categorysControllers.updatecategorys);
exports.categoryRoutes = router;
