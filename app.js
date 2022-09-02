var express = require('express');
var path = require('path');
var { restoreDb } = require('./database/mysql');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/prueba', (req, res) => {
    var success = restoreDb();
    console.log(`Success del app: ${success}`);
    if( success ) {
        res.send("Base de datos restaurada");
    }else{
        res.send("No se pudo restaurar");
    };
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
})
