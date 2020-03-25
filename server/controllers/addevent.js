// const AppModel = require('../models/addevent.js');


// const addUpdateFormContent = async function (req, res, next) {
//     const data = JSON.parse(req.body.data);

//     let attachment = '';
//     if(req.files.length> 0) {attachment = req.files[0].filename};
  
//     const params = {
//         operation: data.operation,
//         type: data.type,
//         title: data.title,
//         description: data.description,
//         id = data.id,
//         posted_by= data.posted_by,
//         new_id: '',
         
//     }   
//     try {
//         const newActivity = new AppModel(params);
//         if(params.title !== '' && params.title !== undefined && params.title !== null){
//             const result = await newActivity.addevent();
//             params.new_id = result.insertId;
//             newActivity.new_id = result.insertId;            
//         }

//         if(params.description !== '' && params.description !== undefined && params.description !== null){
//             const result = await newActivity.addevent();
//             params.new_id = result.insertId;
//             newActivity.new_id = result.insertId;            
//         }
        
//         if (params.operation === 'add') {
//             const result = await newActivity.addevent();
//             if(result.insertId > 0){
//                 res.send({ result: result, is_successful : true });
//             }else{
//                 res.send({ result: result, is_successful : false });
//             }
//         } else if(params.operation === 'update'){
//             if(newActivity.new_image_id !== ''){ newActivity.image_id = newActivity.new_image_id }
//             if(newActivity.new_link_id !== ''){ newActivity.link_id = newActivity.new_link_id }
//             let result = [];
//             if(params.type === 'contact'){
//                 result = await newActivity.updateContactForm();
//             }else{
//                 result = await newActivity.updateFormContent();                
//             }
//             if(result.changedRows > 0){
//                 res.send({ result: result, is_successful : true });
//             }else{
//                 res.send({ result: result, is_successful : false });
//             }
//         }
//     } catch (error) {
//       next(error);
//     }
//   };


//   module.exports = {    
//     addUpdateFormContent: addUpdateFormContent,
  
// };