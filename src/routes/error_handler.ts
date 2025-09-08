import { error } from "console";
import type { RequestHandler, ErrorRequestHandler } from "express";

export const notFoundRequest: RequestHandler = (_req, res) => {
    res.status(404).json({ 
        error: 'Error not Found (Rota inexistente)',
        message: 'A rota (URL) que você está tentando acessar não existe.'
    });
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
    console.log(`system fault:\n ${error}`);
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Error in production',
        message: 'Erro em producao, contate o administrador do sistema.' 
    });
    next('/');
};