const addevents = require('../models/addevent.js');

const addUpdateFormContent = async function (req, res, next) {
    const data = JSON.parse(req.body.data);

    
    let attachment = '';
    if(req.files.length> 0) {attachment = req.files[0].filename};
  
    const params = {
        operation: data.operation,
        type: data.type,
        title: data.title,
        content: data.content,
        id: data.id,
        image_id: data.image_id,
        link_id: data.link_id,  
        image_name: attachment,
        link: data.link,
        new_image_id: '',
        new_link_id: '',   
        address: data.address,
        email: data.email,     
        mobile: data.mobile,     
    }

    try {
        const newActivity = new addevents(params);
        if(params.image_name !== '' && params.image_name !== undefined && params.image_name !== null){
            const result = await newActivity.uploadImage();
            params.new_image_id = result.insertId;
            newActivity.new_image_id = result.insertId;            
        }

        if(params.link !== '' && params.link !== undefined && params.link !== null){
            const result = await newActivity.insertLink();
            params.new_link_id = result.insertId;
            newActivity.new_link_id = result.insertId;            
        }
        
        if (params.operation === 'add') {
            const result = await newActivity.addFormContent();
            if(result.insertId > 0){
                res.send({ result: result, is_successful : true });
            }else{
                res.send({ result: result, is_successful : false });
            }
        } else if(params.operation === 'update'){
            if(newActivity.new_image_id !== ''){ newActivity.image_id = newActivity.new_image_id }
            if(newActivity.new_link_id !== ''){ newActivity.link_id = newActivity.new_link_id }
            let result = [];
            if(params.type === 'contact'){
                result = await newActivity.updateContactForm();
            }else{
                result = await newActivity.updateFormContent();                
            }
            if(result.changedRows > 0){
                res.send({ result: result, is_successful : true });
            }else{
                res.send({ result: result, is_successful : false });
            }
        }
    } catch (error) {
      next(error);
    }
  };


  module.exports = {    
    addUpdateFormContent: addUpdateFormContent,
 };