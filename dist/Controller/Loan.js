"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanController = void 0;
const EvaluateLoan_1 = require("../Service/EvaluateLoan");
class LoanController {
    static async getLoan(req, res, next) {
        try {
            // console.log(req.body);
            // const personal = new ruleLoanPersonalLowWage()
            // await personal.apply(req.body)
            const personal = new EvaluateLoan_1.EvaluateLoan();
            const respose = await personal.evaluate(req.body);
            res.status(200).json(respose);
            return;
        }
        catch (error) {
            next(error);
        }
    }
}
exports.LoanController = LoanController;
