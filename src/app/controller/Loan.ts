import  {NextFunction, Request, Response} from "express";
import { EvaluateLoan } from "../Service/EvaluateLoan";

export class LoanController {

    static async getLoan(req: Request, res: Response, next: NextFunction) {
        try {
            // console.log(req.body);
            // const personal = new ruleLoanPersonalLowWage()
            // await personal.apply(req.body)
            const personal  = new EvaluateLoan();
            
            const respose = await personal.evaluate(req.body);
            res.status(200).json(respose);
            return
        }

        catch(error) {
            next(error)
        }
    }
}