const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const INDEX_PORT = 3001;
const INDEX_HOST = 'localhost';
const MONGO_HOST = "mongodb+srv://spotify:unifor123@cluster0.zi19iqm.mongodb.net/?retryWrites=true&w=majority";
const MONGO_DB = 'Spotify';
const MONGO_COLLECTION_PLAYLISTS = 'playlists';
const MONGO_COLLECTION_USUARIOS = 'usuarios';

const index = express(); index.use(bodyParser.json())

//POST
 index.post('/playlists', (req, res) => {
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(MONGO_COLLECTION_PLAYLISTS).insertOne(req.body, (err) => {
      if (err) throw err
      res.status(201);
      res.send();
    });
  });
});

index.post('/usuarios', (req, res) => {
    mongoClient.connect(MONGO_HOST, (err, client) => {
      if (err) throw err
      const database = client.db(MONGO_DB);
      database.collection(MONGO_COLLECTION_USUARIOS).insertOne(req.body, (err) => {
        if (err) throw err
        res.status(201);
        res.send();
      });
    });
  });

  //GET
 index.get('/playlists', (req, res) => {
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(MONGO_COLLECTION_PLAYLISTS).find({ cod: req.query.cod }).toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});

index.get('/usuarios', (req, res) => {
    mongoClient.connect(MONGO_HOST, (err, client) => {
      if (err) throw err
      const database = client.db(MONGO_DB);
      database.collection(MONGO_COLLECTION_USUARIOS).find({ cod: req.query.cod }).toArray((err, result) => {
        if (err) throw err
        res.send(result);
      });
    });
  });

  //PUT
 index.put('/playlists', (req, res) => {
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(MONGO_COLLECTION_PLAYLISTS).updateOne({ cod: req.query.cod }, { $set: req.query }, (err) => {
      if (err) throw err
      res.send();
    });
  });
});

index.put('/usuarios', (req, res) => {
    mongoClient.connect(MONGO_HOST, (err, client) => {
      if (err) throw err
      const database = client.db(MONGO_DB);
      database.collection(MONGO_COLLECTION_USUARIOS).updateOne({ cod: req.query.cod }, { $set: req.query }, (err) => {
        if (err) throw err
        res.send();
      });
    });
  });

  //DELETE
 index.delete('/playlists', (req, res) => {
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(MONGO_COLLECTION_PLAYLISTS).deleteOne({ cod: req.query.cod }, (err) => {
      if (err) throw err
      res.send();
    });
  });
});

index.delete('/usuarios', (req, res) => {
    mongoClient.connect(MONGO_HOST, (err, client) => {
      if (err) throw err
      const database = client.db(MONGO_DB);
      database.collection(MONGO_COLLECTION_USUARIOS).deleteOne({ cod: req.query.cod }, (err) => {
        if (err) throw err
        res.send();
      });
    });
  });
 index.listen (INDEX_PORT, INDEX_HOST);






// const express = require('express'); // importa o express
// const server = express(); // cria uma variável chamada server que chama a função express
// server.use(express.json()); // faz com que o express entenda JSON
// const MONGO_URL = "mongodb+srv://spotify:unifor123@cluster0.zi19iqm.mongodb.net/?retryWrites=true&w=majority";


// // rota para listar todas as playlists
// server.get('/playlists', (req, res) => {
    
//     return res.json(playlists);
// })

// server.get(`/playlists/:id`, (req, res) => {
//     const {id} = req.params;
//     // const name = req.body;
//     // playlists [index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
//     return res.json(playlists[id]);
// })

// // rota para listar todos os usuarios
// server.get('/usuarios', (req, res) => {
//     return res.json(usuarios);
// })

// server.get('/usuarios/:index', (req, res) => {
//     return res.json(req.params);
// })

// {/*server.post('geeks', checkUserExists, (req, res) =>{
//     const {name} = req.body;
//     geeks.push(name);
//     return res.json(geeks);
// }*/}

// server.post('/playlists', (req, res) => {
//     const name = req.body; // assim esperamos buscar o name informado dentro do body da requisição
//     playlists.push(name);
//     return res.json(playlists); //retorna a informação da variável playlists
    
// })

// server.post('/usuarios', (req, res) => {
//     const email = req.body;
//     usuarios.push(email);
//     return res.json(usuarios);
    
// })

// server.put('/playlists/:index', (req, res) => {
//     const {index} = req.params; // recupera o index com os dados
//     const name = req.body;
//     playlists [index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
//     return res.json(playlists); // retorna novamente com as atualizações
// })

// server.put('/usuarios/:index', (req, res) => {
//     const {index} = req.params;
//     const email = req.body;
//     usuarios [index] = email;
//     return res.json(usuarios);
// })

// server.delete ('/playlists/:index', (req, res) => {
//     const {index} = req.params; // recupera o index com os dados
//     playlists.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
//     return res.json(); // retorna os dados após exclusão
// })

// server.delete ('/usuarios/:index', (req, res) => {
//     const {index} = req.params;
//     usuarios.splice(index, 1);
//     return res.json();
// })

// server.listen(3001);