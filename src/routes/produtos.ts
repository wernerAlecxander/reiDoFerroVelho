import express from 'express';
import type { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Rota de produtos' });
});

router.get('/:prod/:id', (req, res) => {
  const { id, prod } = req.params;
  if (!prod || !id) {
    return res.status(400).json({ error: 'Missing prod or id parameter' });
  }
  //res.json({id: req.params.id});
  //res.get(req.params.id);
  console.log(`produtos: ${prod}, id: ${id}`);
  //simulando um produto vindo do banco de dados;
  res.json({ produtos: { id: id, nome: prod.toUpperCase(), preco: 100.0 } });
});

router.get('/shop/:id/:nome/:preco', (req: Request, res: Response) => {
    //console.log(req.body);
    const { id, nome, preco } = req.params;
    if (!nome || !preco || !id) {
      return res.status(400).json({ error: 'Missing id or nome or preco in body' });
    }
    res.json({
      produtos: {
        id: id,
        nome: nome.toUpperCase(),
        preco: parseFloat(preco),
      },
    });
  }
);


//exportando o router para ser usado em server.ts
export default router;
