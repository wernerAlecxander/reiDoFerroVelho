//LIBRARYS
import express from 'express';
import type { Request, Response } from 'express';
//import type { Request, Response, NextFunction } from 'express';
//creating router
const router = express.Router();
//
//middleware local to check login
/*
export const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const login: boolean = false; //simulating login
    if (login) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
*/

//rota de teste ping
router.get('/', /*loginMiddleware,*/ (req: Request, res: Response) => {
  //res.get('pong');
  console.log('ping recebido: pong enviado');
  res.json({ 
    pong: true 
  });
});

export default router;