const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Miracles = function (params) {
  this.title = params.title;
  this.descrpition  = params.descrpition;
  this.created_by = params.created_by;
  this.created_on = params.created_on;
  this.id  = params.id;
  this.is_active = params.is_active;
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

  Miracles.prototype.handleEventActiveDeactive = function () {
    const that = this;
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
  
        connection.changeUser({database : dbName});
        connection.query('UPDATE miracle SET is_active = "'+that.is_active+'" WHERE id =  "'+that.id+'"', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 


  Miracles.prototype.insertMiracle = function () {
    const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      let Values = [[that.title, that.description,1]];
      connection.changeUser({database : dbName});      
      connection.query('INSERT INTO miracle (title, descrpition,is_active) VALUES ?',[Values], function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  } 
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}


  Miracles.prototype.updateMiracle = function(){
    const that = this;
    return new Promise (function(resolve , reject){
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
        connection.changeUser({database : dbName});
        connection.query('UPDATE miracle SET title = "'+that.title+'", descrpition = "'+that.descrpition+'",created_by = "'+that.created_by+'", created_on = "'+that.created_on+'" WHERE id = "'+that.id+'"', function(error,rows,fields){
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  }); 
  }
  



module.exports = Miracles;
