import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import FetchAPI from '../../api/APIs.js';
import {getDate} from '../../Common/moment.js';



export default function Update({open, handleClose, rowData, setPrayers }) {
    const [inputs, setInputs] = useState(rowData);
    
    
    const handleChange  = (props) => {
        setInputs({...inputs, [props.target.name]: props.target.value});
    }

    const handleSubmit = async () => {
        if(inputs.id !== '',inputs.prayer !==''  && inputs.event_date ){
        try{
            const result = await FetchAPI.updatePrayer({
                id: inputs.id,
                prayer : inputs.prayer,
                
                event_date: getDate(inputs.event_date)
            });
            
            setPrayers(result.prayerList);
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
            Update Prayer
          </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Prayer </label>
                        <div className="col-sm-10">
                            <input className="form-control boxed" placeholder type="text" value = {inputs.prayer}  name="prayer" onChange={handleChange } required />                          
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Description </label>
                        <div className="col-sm-10">
                            <input type="text" id="descrpition" name="descrpition" class="form-control py-2" value={inputs.descrpition}  onChange={handleChange } required/>                          
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Event Date </label>
                        <div className="col-sm-10">
                            <input type="date" id="event_date"  name="event_date" class="form-control py-2" value={getDate(inputs.event_date)}  onChange={handleChange } required/>                          
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
  