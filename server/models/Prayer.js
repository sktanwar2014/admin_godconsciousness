const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Prayers = function (params) {
  this.prayer = params.prayer,
  this.id = params.id;
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

  Prayers.prototype.updatePrayer = function(){
    const that = this;
    return new Promise (function(resolve , reject){
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
        connection.changeUser({database : dbName});
        connection.query('UPDATE prayers SET prayer = "'+that.prayer+'" WHERE id = "'+that.id+'"', function(error,rows,fields){
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  }); 
  }
module.exports = Prayers;
