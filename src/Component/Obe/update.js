import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import FetchAPI from '../../api/APIs.js';
import {getDate} from '../../Common/moment.js';



export default function Update({open, handleClose, rowData, setObes }) {
    const [inputs, setInputs] = useState(rowData);
    
    
    const handleChange  = (props) => {
        setInputs({...inputs, [props.target.name]: props.target.value});
    }

    const handleSubmit = async () => {
        if(inputs.id !== '', inputs.description !== '' && inputs.updated_by ){
        try{
            const result = await FetchAPI.updateObe({
                id: inputs.id,
                
                description : inputs.description, 
                updated_by: getDate(inputs.updated_by)
            });
            
            setObes(result.obeList);
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
            Update Obe
          </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                    {/* <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Title </label>
                        <div className="col-sm-10">
                            <input className="form-control boxed" placeholder type="text" value = {inputs.title}  name="title" onChange={handleChange } required />                          
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Description </label>
                        <div className="col-sm-10">
                            <input type="text" id="description" name="description" class="form-control py-2" value={inputs.description}  onChange={handleChange } required/>                          
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Updated Date </label>
                        <div className="col-sm-10">
                            <input type="date" id="updated_by"  name="updated_by" class="form-control py-2" value={getDate(inputs.updated_by)}  onChange={handleChange } required/>                          
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
  