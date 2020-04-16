import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import FetchAPI from '../../api/APIs.js';
import {getDate} from '../../Common/moment.js';



export default function Add({open, handleClose, setPrayer }) {
    const [inputs, setInputs] = useState({});
    
    
    const handleChange  = (props) => {
        setInputs({...inputs, [props.target.name]: props.target.value});
    }
    console.log(inputs)

    const handleSubmit = async () => {
        if(inputs.prayer !=='' && inputs.event_date !== ''  ){
        try{
            const result = await FetchAPI.insertPrayer({
               prayer: inputs.prayer, 
                event_date: getDate(inputs.event_date)
            });
            
            setPrayer(result.PrayerList);
            handleClose(false);
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
        onHide = {() => {handleClose(false)}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Prayer
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
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Prayer </label>
                        <div className="col-sm-10">
                            <input type="text" id="prayer" name="prayer" class="form-control py-2" value={inputs.prayer}  onChange={handleChange } required/>                          
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Event Date </label>
                        <div className="col-sm-10">
                            <input type="date" id="event_date"  name="event_date" class="form-control py-2" value={getDate(inputs.event_date)}  onChange={handleChange } required/>                          
                        </div>
                    </div>                                       
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {handleClose(false)}}>Close</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
      </Modal>
    );
  }
  