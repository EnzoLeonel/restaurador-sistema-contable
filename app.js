const express = require('express');
const path = require('path');
const { restoreDb } = require('./database/mysql');
const requestIp = require('request-ip');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/prueba', (req, res) => {
    console.log(`IP Cliente: ${requestIp.getClientIp(req)}`);
    if( restoreDb() ) {
        res.send("Base de datos restaurada");
    }else{
        res.send("No se pudo restaurar");
    };
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
})
