import express from 'express';
import type { Request, Response } from 'express';
const router = express.Router();


router.post('/', (req: Request, res: Response) => {
  console.log('BODY:', req.body);
  const { id, nome, preco } = req.body;
  if (!nome || !preco || !id) {
    return res.status(400).json({ error: 'Missing id or nome or preco in body' });
  };
  res.json({
    produto: 
    {
        id: req.body.id,
        nome: req.body.nome, 
        preco: req.body.preco 
    },
  });
});
//exportando o router para ser usado em server.ts
export default router;