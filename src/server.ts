//library
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.js';
//variables
const PORT = process.env.PORT || 3000;
const LINK: string = process.env.LINK || 'http://localhost' as string;
let STATUS = process.env.STATUS || 200;
let ONLINE = process.env.ONLINE || true;
//directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);
const server = express();
//library for protection of attack, pentest and hacking
server.use(helmet());
//initializing server
server.use(express.json());
//habilitando parse request de métodos POST e PUT...
server.use(express.urlencoded({extended: true}));
//tornando a pasta public pública para acesso via LOCALHOST
server.use(express.static(path.join(__dirname, '../public')));
//using routes(index.ts)
server.use('/', router);
//start server_information
server.listen(PORT, () => {
    console.log(`servidor funcionando no link ${LINK}:${PORT}`);
});