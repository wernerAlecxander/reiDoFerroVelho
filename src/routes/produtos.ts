import express from 'express';
import type { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json({message: 'Rota de produtos'});
});

router.get('/:prod/:id', (req, res) => {
    const {id, prod} = req.params;
    if (!prod || !id) {
        return res.status(400).json({ error: 'Missing prod or id parameter' });
    }
    //res.json({id: req.params.id});
    //res.get(req.params.id);
    console.log(req.params);
    //simulando um produto vindo do banco de dados;
    res.json({produtos: {id: id, nome: prod.toUpperCase(), preco: 100.00}});
});
//exportando o router para ser usado em server.ts
export default router;