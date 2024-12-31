import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import route from './route/routes';

const app = express();
app.use(express.json())
dotenv.config();
app.use(cors());

const port = Number(process.env.PORT);

app.use("/emprestimos", route);                         

app.listen(port, '0.0.0.0', () => {
    console.log(`\n O servidor está rodando, http://localhost:${port}.`);    
})

