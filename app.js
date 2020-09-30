const express = require("express");

const app = express();

//Coxnexão com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'leandroone',
    password : '123456',
    database : 'leandro'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM leandro.users', function(err, rows, fiels){
        if(!err){
            console.log('Resultado: ', rows);
        }else {
            console.log('Erro ao realizar a consulta');
        }
  });

  //

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

app.get("/blog", function(req, res){
    res.send("Pagina do blog");
});

app.listen(8080);