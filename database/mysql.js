const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');
const events = require('events');
const readline = require('readline');
const requestIp = require('request-ip');

var db_config = {
    host: "btozqiibvdqa9tmgpsz6-mysql.services.clever-cloud.com",
    user: "ud6ciidjbxolhwxg",
    password: "SCpZw1nVttMq07Up4Km6",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const pool = mysql.createPool(db_config);

function restoreDb(req, res) {
    try{
        console.log(`IP Cliente: ${requestIp.getClientIp(req)}`);
        const fileStream = fs.createReadStream('./database/db-librodiario.sql');
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        pool.getConnection((err, conn) => {
            rl.on('line', (line) => {
                conn.query(line, (err, rows) => {
                    if(err) console.error(`Error en query: ${err}`);
                });
            });
            events.once(rl, 'close');
            pool.releaseConnection(conn);
            console.log(" - Todas las consultas realizadas - ")
            res.sendFile(process.cwd() + '/public/success.html');
         });
    }catch(error){
        console.error(error);
        res.sendFile(process.cwd() + '/public/index.html');
    }
}

module.exports = {restoreDb};