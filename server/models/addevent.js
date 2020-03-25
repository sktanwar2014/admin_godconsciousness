const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");

const AppModel = function (params) {
  
  this.title = params.title;
  this.description = params.description;
  this.id = params.id;
  this.posted_by= params.posted_by;

};


AppModel.prototype.addevent = function () {
    const that = this;
    return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      connection.changeUser({database : dbName});  
      let Values = [[that.image_name, 1]];    
      connection.query('INSERT INTO events(title,description,posted_by,is_active) VALUES ?',[Values], function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  } 
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}


AppModel.prototype.insertLink = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
  connection.getConnection(function (error, connection) {
    if (error) {
      throw error;
    }
    connection.changeUser({database : dbName});  
    let Values = [[that.link, 1]];    
    connection.query('INSERT INTO links(website_link, is_active) VALUES ?',[Values], function (error, rows, fields) { 
      if (error) {  console.log("Error...", error); reject(error);  } 
      resolve(rows);              
    });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
  });
});
}

AppModel.prototype.addFormContent = function () {
    const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      let Values = [[that.type, that.new_image_id, that.new_link_id, that.title, that.content, 1]];
      connection.changeUser({database : dbName});      
      connection.query('INSERT INTO website_content(type, image_id, link_id, title, content, is_active) VALUES ?',[Values], function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  } 
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}



AppModel.prototype.updateFormContent = function () {
  const that = this;
return new Promise(function (resolve, reject) {
  connection.getConnection(function (error, connection) {
    if (error) {
      throw error;
    }
   

    connection.changeUser({database : dbName});
    connection.query('UPDATE website_content SET title = "'+that.title+'", image_id = "' + that.image_id + '", link_id = "' +that.link_id+ '", content = "'+that.content+'" WHERE id = "'+that.id+'"', function (error, rows, fields) { 
      if (error) {  console.log("Error...", error); reject(error);  }          
      resolve(rows);              
    });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
  });
});
}



AppModel.prototype.updateContactForm = function () {
  const that = this;
return new Promise(function (resolve, reject) {
  connection.getConnection(function (error, connection) {
    if (error) {
      throw error;
    }
   

    connection.changeUser({database : dbName});
    connection.query('UPDATE contact SET email = "'+that.email+'", address = "' + that.address + '", mobile = "' +that.mobile+ '" WHERE id = "'+that.id+'"', function (error, rows, fields) { 
      if (error) {  console.log("Error...", error); reject(error);  }          
      resolve(rows);              
    });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
  });
});
}

AppModel.prototype.getTabRelatedList = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }
      connection.changeUser({database : dbName});
      connection.query('SELECT wc.*, i.image_name, l.website_link as link FROM website_content as wc LEFT JOIN images as i ON wc.image_id = i.id LEFT JOIN links as l ON l.id = wc.link_id WHERE type = "' +that.type+ '"', function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}


AppModel.prototype.getContactList = function () {
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      connection.changeUser({database : dbName});
      connection.query('SELECT * FROM contact', function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
}




AppModel.prototype.login = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      connection.changeUser({database : dbName});
      connection.query('SELECT name, token, username, is_active FROM user WHERE username = "'+that.username+'" AND password = "'+that.password+'"', function (error, rows, fields) { 
        if (error) {  console.log("Error...", error); reject(error);  }          
        resolve(rows);              
      });
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
} 


AppModel.prototype.changeState = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {
        throw error;
      }

      connection.changeUser({database : dbName});
      if(that.type === 'contact'){
        connection.query('UPDATE contact SET is_active  = "'+ that.is_active +'" WHERE id = "'+that.id+'"', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
      }else{
        connection.query('UPDATE website_content SET is_active  = "'+ that.is_active +'" WHERE id = "'+that.id+'"', function (error, rows, fields) { 
          if (error) {  console.log("Error...", error); reject(error);  }          
          resolve(rows);              
        });
      }      
        connection.release();
        console.log('Process Complete %d', connection.threadId);
    });
  });
} 

// AppModel.prototype.getServicesList = function () {
//   return new Promise(function (resolve, reject) {
//     connection.getConnection(function (error, connection) {
//       if (error) {
//         throw error;
//       }

//       connection.changeUser({database : dbName});
//       connection.query('SELECT * FROM website_content WHERE type = \'services\'', function (error, rows, fields) { 
//         if (error) {  console.log("Error...", error); reject(error);  }          
//         resolve(rows);              
//       });
//         connection.release();
//         console.log('Process Complete %d', connection.threadId);
//     });
//   });
// }



// AppModel.prototype.getWhyusList = function () {
//     return new Promise(function (resolve, reject) {
//       connection.getConnection(function (error, connection) {
//         if (error) {
//           throw error;
//         }
  
//         connection.changeUser({database : dbName});
//         connection.query('SELECT * FROM website_content WHERE type = \'whyus\'', function (error, rows, fields) { 
//           if (error) {  console.log("Error...", error); reject(error);  }          
//           resolve(rows);              
//         });
//           connection.release();
//           console.log('Process Complete %d', connection.threadId);
//       });
//     });
//   }


// AppModel.prototype.getAboutList = function () {
//     return new Promise(function (resolve, reject) {
//       connection.getConnection(function (error, connection) {
//         if (error) {
//           throw error;
//         }
  
//         connection.changeUser({database : dbName});
//         connection.query('SELECT * FROM website_content WHERE type = \'about\'', function (error, rows, fields) { 
//           if (error) {  console.log("Error...", error); reject(error);  }          
//           resolve(rows);              
//         });
//           connection.release();
//           console.log('Process Complete %d', connection.threadId);
//       });
//     });
//   }


// AppModel.prototype.getGoalsList = function () {
//     return new Promise(function (resolve, reject) {
//       connection.getConnection(function (error, connection) {
//         if (error) {
//           throw error;
//         }
  
//         connection.changeUser({database : dbName});
//         connection.query('SELECT * FROM website_content WHERE type = \'goals\'', function (error, rows, fields) { 
//           if (error) {  console.log("Error...", error); reject(error);  }          
//           resolve(rows);              
//         });
//           connection.release();
//           console.log('Process Complete %d', connection.threadId);
//       });
//     });
//   }


// AppModel.prototype.getTechnologyList = function () {
//     return new Promise(function (resolve, reject) {
//       connection.getConnection(function (error, connection) {
//         if (error) {
//           throw error;
//         }
  
//         connection.changeUser({database : dbName});
//         connection.query('SELECT * FROM website_content WHERE type = \'technology\'', function (error, rows, fields) { 
//           if (error) {  console.log("Error...", error); reject(error);  }          
//           resolve(rows);              
//         });
//           connection.release();
//           console.log('Process Complete %d', connection.threadId);
//       });
//     });
//   } 

//   AppModel.prototype.getPartnersList = function () {
//     return new Promise(function (resolve, reject) {
//       connection.getConnection(function (error, connection) {
//         if (error) {
//           throw error;
//         }
  
//         connection.changeUser({database : dbName});
//         connection.query('SELECT * FROM website_content WHERE type = \'partners\'', function (error, rows, fields) { 
//           if (error) {  console.log("Error...", error); reject(error);  }          
//           resolve(rows);              
//         });
//           connection.release();
//           console.log('Process Complete %d', connection.threadId);
//       });
//     });
//   } 

// AppModel.prototype.getPortfolioList = function () {
//     return new Promise(function (resolve, reject) {
//       connection.getConnection(function (error, connection) {
//         if (error) {
//           throw error;
//         }
  
//         connection.changeUser({database : dbName});
//         connection.query('SELECT * FROM website_content WHERE type = \'portfolio\'', function (error, rows, fields) { 
//           if (error) {  console.log("Error...", error); reject(error);  }          
//           resolve(rows);              
//         });
//           connection.release();
//           console.log('Process Complete %d', connection.threadId);
//       });
//     });
//   } 

module.exports = AppModel;
