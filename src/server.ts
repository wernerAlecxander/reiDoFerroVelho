//library
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.js';
import produtoRouter from './routes/produtos.js';
import destinoRouter from './routes/destino.js';
import statusRouter from './routes/status.js';
//variables
const PORT = process.env.PORT || 3000;
const LINK: string = process.env.LINK || 'http://localhost' as string;
let STATUS = process.env.STATUS || 200;
let ONLINE = process.env.ONLINE || true;
//directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);
//initializing server
const server = express();
//library for protection of attack, pentest and hacking
server.use(helmet());
//initializing json response
server.use(express.json());
//initializing form response(GET, POST, PUT, DELETE)
server.use(express.urlencoded({extended: true}));
//tornando a pasta public pública para acesso via LOCALHOST
server.use(express.static(path.join(__dirname, '../public')));
//ROTAS(páginas da aplicação):
//using routes(produtos.ts)
server.use('/produtos', produtoRouter);
//using routes(destino.ts)
server.use('/destino', destinoRouter);
//using routes(status.ts)
server.use('/status', statusRouter);
//using rota generica(index.ts)
server.use('/', router);
//start server_information
server.listen(PORT, () => {
    console.log(`servidor funcionando no link ${LINK}:${PORT}`);
});