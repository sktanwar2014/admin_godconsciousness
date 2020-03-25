const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const updatecontact = function (params) {
  this.type = params.type;  
  //this.title = params.title;
 //this.content = params.content;
  //this.id = params.id;
  //this.image_id = params.image_id;
  //this.link_id = params.link_id;
  //this.password = params.password;
 //this.username = params.username;
  //this.image_name = params.image_name;
  //this.new_image_id = params.new_image_id;
  //this.link = params.link;
  //this.new_link_id = params.new_link_id;
  this.address= params.address;
  this.email_add= params.email_add;
  this.phone_no = params.phone_no;
  this.is_active = params.is_active;
};


updatecontact.prototype.updateContactForm = function () {
    const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
     
  
      connection.changeUser({database : dbName});
      connection.query('UPDATE contact SET email_add = "'+that.email_add+'", address = "' + that.address + '", phone_no = "' +that.phone_no+ '" WHERE id = "'+that.id+'"', function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
  }


  module.exports = updatecontact;