//library
import express from 'express';
import type { Request, Response } from 'express';
const router = express.Router();
// Rota para /destino/:from/:to
router.get('/:from/:to', (req: Request, res: Response) => {
    const {from, to} = req.params;
    if (!from || !to) {
        return res.status(400).json({ error: 'Missing from or to parameter' });
    }
    //simulando um produto vindo do banco de dados;
    res.json({
        destino: {
            message: 'Rota de destino',
            from: from.toUpperCase(), 
            to:to.toUpperCase(), 
            price: 200
        }
    });
    console.log(req.params);
});
//exportando o router para ser usado em server.ts
export default router;
