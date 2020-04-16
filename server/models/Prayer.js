const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Prayers = function (params) {
  this.prayer = params.prayer,
  this.id = params.id;
  this.is_active = params.is_active;
  this.event_date = params.event_date;
  this.created_at = params.created_at;
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

  Prayers.prototype.insertPrayer = function () {
    const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      let Values = [[that.prayer,that.event_date, 1, 1]];
      console.log(Values);
      connection.changeUser({database : dbName});      
      connection.query('INSERT INTO prayers(prayer,event_date, created_by, is_active) VALUES ?',[Values], function (error, rows, fields) { 
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
      connection.query('UPDATE prayers SET prayer = "'+that.prayer+'",event_date = "'+that.event_date+'", created_at = now() WHERE id = "'+that.id+'"', function(error,rows,fields){
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
  });
}); 
}
module.exports = Prayers;
