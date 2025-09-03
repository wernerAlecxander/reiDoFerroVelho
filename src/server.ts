//library
import express from 'express';
import helmet from 'helmet';
import path from 'path';
//variables
const PORT: number = 3000 as number;
const LINK: string = 'http://localhost' as string;
let status: number = 200 as number;
let online: boolean = true;
const server = express();
//library for protection of attack, pentest and hacking
server.use(helmet());
//initializing server
server.use(express.json());
//habilitando parse request de métodos POST e PUT...
server.use(express.urlencoded({extended: true}));
//tornando a pasta public pública para acesso via LOCALHOST
server.use(express.static(path.join(__dirname, '../public')));
//create routes
server.get('/ping', (req, res) => {
    //res.get('pong');
    res.json({pong: true});
});

server.get('/prod', (req, res) => {
    res.json({produtos: {id: 1, nome: 'produto 1', preco: 100.00}});
});

server.get('/status', (req, res) => {
    res.json({LINK, PORT, status, online});
});
//start server_information
server.listen(PORT, () => {
    console.log(`servidor funcionando no link ${LINK}:${PORT}`);
});