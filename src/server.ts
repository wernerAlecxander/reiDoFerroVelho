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

server.get('/:prod/:id', (req, res) => {
    const {id, prod} = req.params; 
    //res.json({id: req.params.id});
    //res.get(req.params.id);
    console.log(req.params);
    //simulando um produto vindo do banco de dados;
    res.json({produtos: {id: id, nome: prod.toUpperCase(), preco: 100.00}});
});

server.get('/flight/:from/:to', (req, res) => {
    const {from, to} = req.params;
    res.json({
        flight: {
            from: from.toUpperCase(), 
            to:to.toUpperCase(), 
            price: 200
        }
    });
    console.log(req.params);
});

//route server_information

server.get('/status', (req, res) => {
    res.json({LINK, PORT, status, online});
});
//start server_information
server.listen(PORT, () => {
    console.log(`servidor funcionando no link ${LINK}:${PORT}`);
});