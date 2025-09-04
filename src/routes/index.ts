//LIBRARYS
//express framework
import express from 'express';
//security
import type { Request, Response } from 'express';
//importing route gereric (index.ts)
const router = express.Router();

//IMPORTING OTHER ROUTES
//route for products (produtos.ts)
import produtosRouter from './produtos.js';
//route for destination (destino.ts)
import destinoRouter from './destino.js';
//route for status (status.ts)
import statusRouter from './status.js';

//MAIN ROUTE(páginas da aplicação)
//using routes(produtos.ts)
router.use('/produtos', produtosRouter);
//using routes(destino.ts)
router.use('/destino', destinoRouter);
//using routes(status.ts)
router.use('/status', statusRouter);




// rota generica para /
router.get('/', (req: Request, res: Response) => {
    res.json({message: 'Welcome to the API'});
});
//rota de teste ping
router.get('/ping', (req: Request, res: Response) => {
    //res.get('pong');
    res.json({pong: true});
});
/*module.exports = router;*/
//exportando o router
export default router;