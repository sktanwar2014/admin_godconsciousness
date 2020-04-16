import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import FetchAPI from '../../api/APIs.js';
import {getDate} from '../../Common/moment.js';



export default function Update({open, handleClose, rowData, setContacts }) {
    const [inputs, setInputs] = useState(rowData);
    
    
    const handleChange  = (props) => {
        setInputs({...inputs, [props.target.name]: props.target.value});
    }

    const handleSubmit = async () => {
        if(inputs.id !== '',inputs.address !=='' && inputs.phone_no !== '' && inputs.email_add !== '' ){
        try{
            const result = await FetchAPI.updateDirection({
                id: inputs.id,
                address : inputs.address,
                phone_no : inputs.phone_no, 
                email_add : inputs.email_add
                //event_date: getDate(inputs.event_date)
            });
            
            setContacts(result.contactList);
            handleClose();
        }catch(e){
            console.log('Error...',e);
        }
        }else{
        alert('Need all fields')
        }
    }


    return (
      <Modal
        show = {open}
        onHide = {handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Contacts
          </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Address </label>
                        <div className="col-sm-10">
                            <input className="form-control boxed" placeholder type="text" value = {inputs.address}  name="address" onChange={handleChange } required />                          
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Phone no </label>
                        <div className="col-sm-10">
                            <input type="number" id="phone_no"name="phone_no" class="form-control py-2" value={inputs.phone_no}  onChange={handleChange } required/>                          
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Email_Add </label>
                        <div className="col-sm-10">
                            <input type="email" id="email_add"  name="email_add" class="form-control py-2" value={inputs.email_add}  onChange={handleChange } required/>                          
                        </div>
                    </div>                                       
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
      </Modal>
    );
  }
  