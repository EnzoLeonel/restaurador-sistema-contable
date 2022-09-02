const mysql = require('mysql2');
const fs = require('fs');
const events = require('events');
const readline = require('readline');

const connection = mysql.createConnection({
    host: "btozqiibvdqa9tmgpsz6-mysql.services.clever-cloud.com",
    user: "ud6ciidjbxolhwxg",
    password: "SCpZw1nVttMq07Up4Km6",
    port: "3306"
});

function processLineByLine() {
    var success = true;
    try {
        const fileStream = fs.createReadStream('./database/db-librodiario.sql');
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            console.log(line);
            connection.query(line, (err, rows) => {
                if (err)
                    throw err;
                    success = false;
                    return;
            });
        });
        events.once(rl, 'close');
        return success;
    }catch(err){
        console.error(err);
        connection.end();
        return false;
    }
}

function restoreDb() {
    var success = true;
    connection.connect((err) => {
        if (err) {
            console.log(err);
            success = false;
            return;
        }
        console.log('Conexion establecida');
        success = processLineByLine();
    });
    return success;
}

module.exports = {restoreDb};