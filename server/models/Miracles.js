const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Miracles = function (params) {
};

Miracles.prototype.getMiracles = function () {
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }  
        connection.changeUser({database : dbName});
        connection.query('SELECT * FROM  miracle', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 

module.exports = Miracles;
