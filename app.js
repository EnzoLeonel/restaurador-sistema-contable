const express = require('express');
const path = require('path');
const { restoreDb } = require('./database/mysql');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'),{index: '_'}));

app.get('*', restoreDb);

app.listen(3000, () => {
    console.log("Servidor iniciado");
})
