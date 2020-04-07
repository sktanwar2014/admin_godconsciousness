const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const Auth = function (params) {
  this.username = params.username;
  this.password = params.password;
};


 
Auth.prototype.login = function(){
  const that = this;
  return new Promise (function(resolve , reject){
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      connection.changeUser({database : dbName});
      connection.query('SELECT id, name, user_id,  token, is_active from users WHERE user_id = "'+that.username+'" AND password = AES_ENCRYPT("'+that.password+'", \'secret\') AND is_active = 1', function(error,rows,fields){
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
  });
}); 
}


module.exports = Auth;