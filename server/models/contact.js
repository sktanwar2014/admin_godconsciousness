const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const contact = function (params) {
  this.address = params.address;
  this.email_add = params.email_add;
  this.phone_no = params.phone_no;
  this.id = params.id;
};

contact.prototype.getcontact = function () {
    return new Promise(function (resolve, reject) {
      connection.getConnection(function (error, connection) {
        if (error) {
          throw error;
        }
  
        connection.changeUser({database : dbName});
        connection.query('SELECT * FROM  contact', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
          connection.release();
          console.log('Process Complete %d', connection.threadId);
      });
    });
  } 

  
contact.prototype.updateContact = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      connection.changeUser({database : dbName});
      connection.query('UPDATE contact SET address = "'+that.address+'", phone_no = "'+that.phone_no+'", email_add = "'+that.email_add+'" WHERE id = "'+that.id+'"' ,function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
} 

module.exports = contact;
