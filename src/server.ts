//LIBRARYS
//express framework
import express from 'express';
//security
import helmet from 'helmet';
//path for static files
import path from 'path';
//directory name for directory static files
import { fileURLToPath } from 'url';
//directory name
import { dirname } from 'path';
//importing route gereric (index.ts)
import router from './routes/index.js';

//variables
const PORT = process.env.PORT || 3000;
const LINK: string = process.env.LINK || 'http://localhost' as string;


//directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

//INITIALIZING SERVER
//initializing express
const server = express();
//library for protection of attack, pentest and hacking
server.use(helmet());
//initializing json response
server.use(express.json());
//initializing form response(GET, POST, PUT, DELETE)
server.use(express.urlencoded({extended: true}));
//tornando a pasta public pública para acesso via LOCALHOST
server.use(express.static(path.join(__dirname, '../public')));

//ROUTE GENERIC
//using rota generica(index.ts)
server.use('/', router);
//start server_information
server.listen(PORT, () => {
    console.log(`servidor funcionando no link ${LINK}:${PORT}`);
});