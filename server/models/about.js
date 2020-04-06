const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const AppModel = function (params) {
  this.content = params.content;
  this.id = params.id;
 
};


 
AppModel.prototype.updateAbout = function(){
  const that = this;
  return new Promise (function(resolve , reject){
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      connection.changeUser({database : dbName});
      connection.query('UPDATE about SET content = "'+that.content+'" WHERE id = "'+that.id+'"', function(error,rows,fields){
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
  });
}); 
}


module.exports = AppModel;