"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Loan_1 = require("../Controller/Loan");
const route = express_1.default.Router();
route.post("/", Loan_1.LoanController.getLoan);
route.use((err, req, res, next) => {
    res.status(500).json(err.message);
    // console.log(err.message);
});
exports.default = route;
