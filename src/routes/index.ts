//LIBRARYS
//express framework
import express from 'express';
//security
import type { Request, Response } from 'express';
//importing route gereric (index.ts)
const router = express.Router();

//IMPORTING OTHER ROUTES
//importing middleware
import { loggerMiddleware } from '../middlewares/logger.js';
//route for products (produtos.ts)
import produtosRouter from './produtos.js';
//route for destination (destino.ts)
import destinoRouter from './destino.js';
//route for status (status.ts)
import statusRouter from "./status.js";
//route for ping (ping.ts)
import pingRouter from "./ping.js";
//importing add route (add.ts)
import addRouter from './add.js';


//MAIN ROUTE(páginas da aplicação)
router.use(loggerMiddleware);
//using routes(produtos.ts)
router.use('/produtos', produtosRouter);
//using routes(destino.ts)
router.use('/destino', destinoRouter);
//using routes(status.ts)
router.use('/status', statusRouter);
//rota de teste ping
router.use('/ping', pingRouter);
//rota para adicionar produtos
router.use('/add', addRouter);
// rota generica para /
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});
/*module.exports = router;*/
//exportando o router
export default router;
