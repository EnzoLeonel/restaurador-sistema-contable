const express = require('express');
const path = require('path');
var favicon = require('serve-favicon');
const { restoreDb } = require('./database/mysql');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'),{index: '_'}));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// app.get('*', restoreDb);

//Para realizar las pruebas del diseño web
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/success.html')
})

app.listen(3000, () => {
    console.log("Servidor iniciado");
})
