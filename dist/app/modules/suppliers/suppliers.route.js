"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierRoutes = void 0;
const express_1 = __importDefault(require("express"));
const suppliers_controller_1 = require("./suppliers.controller");
const router = express_1.default.Router();
router.get('/supplier', suppliers_controller_1.suppliersControllers.getsuppliers);
router.post('/create-supplier', suppliers_controller_1.suppliersControllers.createsuppliers);
router.delete('/suppliers/:id', suppliers_controller_1.suppliersControllers.deletesuppliers);
router.put('/supplier/:id', suppliers_controller_1.suppliersControllers.updatesuppliers);
exports.supplierRoutes = router;
