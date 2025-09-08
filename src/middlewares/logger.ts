//LIBRARYS
import type { Request, Response, NextFunction } from 'express';

//middleware to check login
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const login: boolean = true; //simulating login
    if (login) {
        console.log(`
            information_logs: informação de logs,
            Request Method: ${req.method}, 
            Request URL: ${req.url},
            Time: ${new Date().toISOString()}, 
            message: User logged OK(200)\n`);
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}