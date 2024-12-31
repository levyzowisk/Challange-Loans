import express, {Request, Response, NextFunction } from "express";
import { LoanController } from "../Controller/Loan";
const route = express.Router()

route.post("/", LoanController.getLoan)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json(err.message)
    // console.log(err.message);
    
})

export default route