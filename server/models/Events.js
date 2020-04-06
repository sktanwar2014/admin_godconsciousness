const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const AppModel = function (params) {
  this.title =  params.title;
  this.description = params.description;
  this.event_date = params.event_date;
  this.id = params.id;
  this.is_active = params.is_active;
};

 AppModel.prototype.getEvents = function () {
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
  
        connection.changeUser({database : dbName});
        connection.query('SELECT * FROM  events', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows); 
          //console.log(error);             
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 
    
 
  AppModel.prototype.handleEventActiveDeactive = function () {
    const that = this;
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
  
        connection.changeUser({database : dbName});
        connection.query('UPDATE events SET is_active = "'+that.is_active+'" WHERE id =  "'+that.id+'"', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 



  AppModel.prototype.insertEvent = function () {
    const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      let Values = [[that.title, that.description,1]];
      connection.changeUser({database : dbName});      
      connection.query('INSERT INTO events(title, description,is_active) VALUES ?',[Values], function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  } 
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}

  AppModel.prototype.updateEvent = function(){
    const that = this;
    return new Promise (function(resolve , reject){
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
        connection.changeUser({database : dbName});
        connection.query('UPDATE events SET title = "'+that.title+'", description = "'+that.description+'", posted_by = "'+that.posted_by+'", posted_on = "'+that.posted_on+'" WHERE id = "'+that.id+'"', function(error,rows,fields){
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  }); 
  }
  

module.exports = AppModel;
