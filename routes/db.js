var mysql = require('mysql');
var dbconfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodedemo',
    port: 3306
};

exports.executeSql = function (sql, callback) {
    var connect = mysql.createConnection(dbconfig);
    connect.connect(function (err) {
        if (!err) {
            connect.query(sql, function (err, data) {
                if (!err) {
                    connect.end();
                    callback(null, data);
                }
                else {
                    connect.end();
                    console.log(err);
                    err.status = 500;
                    callback(err, null);
                }
            });
        }
        else {
            connect.end();
            console.log(err);
            err.status = 500;
        }
    });
};