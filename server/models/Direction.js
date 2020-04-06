const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const direction = function (params) {
  this.title = params.title;
  this.description = params.description;
  this.id = params.id;
  this.is_active = params.is_active;
};

direction.prototype.getdirection = function () {
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
  
        connection.changeUser({database : dbName});
        connection.query('SELECT * FROM  direction', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 


  
  direction.prototype.insertDirection = function () {
    const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      let Values = [[that.title, that.description,1]];
      connection.changeUser({database : dbName});      
      connection.query('INSERT INTO direction(title, description,is_active) VALUES ?',[Values], function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  } 
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}

  direction.prototype.updateDirection = function(){
    const that = this;
    return new Promise (function(resolve , reject){
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
        connection.changeUser({database : dbName});
        connection.query('UPDATE direction SET title = "'+that.title+'", description = "'+that.description+'" WHERE id = "'+that.id+'"', function(error,rows,fields){
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  }); 
  }



module.exports = direction;
