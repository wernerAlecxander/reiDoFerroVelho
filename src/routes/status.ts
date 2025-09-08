//LIBRARYS
import express from 'express';
import type { Request, Response } from 'express';
//creating router
const router = express.Router();
//router(server)_information initialization
router.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: { 
    message: 'API is running',
    uptime: process.uptime(),
    timestamp: Date.now(),
    LINK: process.env.LINK,
    PORT: process.env.PORT,
    ONLINE: process.env.ONLINE,
    STATUS: process.env.STATUS,
    },
  });
});
//exportando o router para ser usado em server.ts
export default router;
