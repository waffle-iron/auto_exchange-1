/**
 * Created by satyateja on 11/19/2016.
 */
var ejs= require('ejs');
var mysql = require('mysql');
var logger = require('../helper/logger').getLogger();

var pool = null;
function getConnection(){
    var connection = mysql.createConnection({
        host : 'localhost',
        user : '',
        password : '',
        database : 'auto_exchange',
        port : 3306
    });

    return connection;
}


function fetchData(sqlQuery, callback){
    logger.trace("Executing query "+ sqlQuery);
    var connection=getConnection();

    connection.query(sqlQuery, function(err, rows, fields) {
        if(err){
            console.log("ERROR: " + err.message);
        }
        else
        {	// return err or result
            console.log("Query result "+ JSON.stringify(rows));
            callback(err, rows);
        }
    });
    connection.end();
}

exports.fetchData=fetchData;
exports.getConnection = getConnection;
