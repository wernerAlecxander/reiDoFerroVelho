//library
import express from 'express';
import type { Request, Response } from 'express';
const router = express.Router();
//router(server)_information
router.get('/status', (req: Request, res: Response) => {
    res.json({
        LINK: process.env.LINK, 
        PORT: process.env.PORT, 
        ONLINE: process.env.ONLINE, 
        STATUS: process.env.STATUS});
});
//exportando o router para ser usado em server.ts
export default router;