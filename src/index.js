const express = require('express'); // importa o express
const server = express(); // cria uma variável chamada server que chama a função express
server.use(express.json()); // faz com que o express entenda JSON


const usuarios = [
    {
         id: 1,
         "nome":"Victor",
         "email":"victoorsaatos16@gmail.com",
         "cpf":"999-999-999-99",
         "endereço":"Rua Fulano de Tal, 225"
    },
    {
        id: 2,
        "nome":"José",
        "email":"jose@gmail.com",
        "cpf":"999-999-999-99",
        "endereço":"Rua Fulano de Tal, 227"
   }
];

const playlists = [
    {
         id: 1,
        "nome": "play1",
        "musica": "Aquela lá 1"
    },
    {
         id: 2,
        "nome": "play2",
        "musica": "Aquela lá 2"
    },
    {
         id: 3,
        "nome": "play3",
        "musica": "Aquela lá 3"
    },
    {
         id: 4,
        "nome": "play4",
        "musica": "Aquela lá 4"
    }
];

// rota para listar todas as playlists
server.get('/playlists', (req, res) => {
    return res.json(playlists);
})

server.get(`/playlists/:id`, (req, res) => {
    const {id} = req.params;
    // const name = req.body;
    // playlists [index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
    return res.json(playlists[id]);
})

// rota para listar todos os usuarios
server.get('/usuarios', (req, res) => {
    return res.json(usuarios);
})

server.get('/usuarios/:index', (req, res) => {
    return res.json(req.params);
})

{/*server.post('geeks', checkUserExists, (req, res) =>{
    const {name} = req.body;
    geeks.push(name);
    return res.json(geeks);
}*/}

server.post('/playlists', (req, res) => {
    const name = req.body; // assim esperamos buscar o name informado dentro do body da requisição
    playlists.push(name);
    return res.json(playlists); //retorna a informação da variável playlists
    
})

server.post('/usuarios', (req, res) => {
    const email = req.body;
    usuarios.push(email);
    return res.json(usuarios);
    
})

server.put('/playlists/:index', (req, res) => {
    const {index} = req.params; // recupera o index com os dados
    const name = req.body;
    playlists [index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
    return res.json(playlists); // retorna novamente com as atualizações
})

server.put('/usuarios/:index', (req, res) => {
    const {index} = req.params;
    const email = req.body;
    usuarios [index] = email;
    return res.json(usuarios);
})

server.delete ('/playlists/:index', (req, res) => {
    const {index} = req.params; // recupera o index com os dados
    playlists.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
    return res.json(); // retorna os dados após exclusão
})

server.delete ('/usuarios/:index', (req, res) => {
    const {index} = req.params;
    usuarios.splice(index, 1);
    return res.json();
})

server.listen(3001);