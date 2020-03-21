const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Prayers = function (params) {
};

Prayers.prototype.getPrayers = function () {
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }  
        connection.changeUser({database : dbName});
        connection.query('SELECT * FROM  prayers', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 

module.exports = Prayers;
