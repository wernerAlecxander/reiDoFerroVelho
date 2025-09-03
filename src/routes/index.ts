import express from 'express';
import type { Request, Response } from 'express';
const router = express.Router();

// Example route
router.get('/', (req: Request, res: Response) => {
    res.json({message: 'Welcome to the API'});
});

router.get('/ping', (req: Request, res: Response) => {
    //res.get('pong');
    res.json({pong: true});
});

router.get('/:prod/:id', (req: Request, res: Response) => {
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

router.get('/flight/:from/:to', (req: Request, res: Response) => {
    const {from, to} = req.params;
    if (!from || !to) {
        return res.status(400).json({ error: 'Missing from or to parameter' });
    }
    //simulando um produto vindo do banco de dados;
    res.json({
        flight: {
            from: from.toUpperCase(), 
            to:to.toUpperCase(), 
            price: 200
        }
    });
    console.log(req.params);
});

//router(server)_information
router.get('/status', (req: Request, res: Response) => {
    res.json({
        LINK: process.env.LINK, 
        PORT: process.env.PORT, 
        ONLINE: process.env.ONLINE, 
        STATUS: process.env.STATUS});
});
/*module.exports = router;*/
//exportando o router
export default router;