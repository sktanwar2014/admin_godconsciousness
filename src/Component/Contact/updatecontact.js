import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Header from '.././SubComponent/Header.js';
import Sidebar from '.././SubComponent/Sidebar.js';
import {Redirect} from 'react-router-dom';


// import api
import FetchAPI from '../../api/APIs.js';

export default function ContactEditor(mainProps) {
  const props = mainProps.location.state;
  

 console.log(props)

  
  const [inputs, setInputs] = useState({address:'', email_add:'', phone_no: ''});  

  const handleChange  = (props) => {
    setInputs({...inputs, [props.target.name]: props.target.value});
  }

  useEffect(() => {
    if(Object.keys(props)[2] === 'data'){
      setInputs({address: props.data.address , email_add: props.data.email_add,phone_no: props.data.phone_no  })
    }
  },[])



  const handleSubmit = async () => {
    if(inputs.address !=='' && inputs.phone_no !== '' && inputs.email_add ){
      try{
        
        const response = await FetchAPI.updateContact({ id:props.data.id, phone_no: inputs.phone_no, address: inputs.address, email_add: inputs.email_add });
console.log(response)
        // if(response.is_successful === true){
        //     mainProps.history.push(pathLink);
        // }else {
        //   if(operation === 'add'){
        //     alert('operation failed');
        //   }            
      }catch(e){
        console.log('Error...',e);
      }
    }else{
      alert('Need all fields')
    }
  }

  async function submitHandle(e) {
    e.preventDefault();

    const PARAMS = ({ methodType = 'GET' }) => ({
      method: methodType
    });

    const URL = `http://localhost:5000/api/updateContact`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: { id:props.data.id, phone_no: inputs.phone_no, address: inputs.address, email_add: inputs.email_add },
      }),
    );
      return data;
    } catch (error) {
      // checkError(error);
    }
//     if(inputs.address !=='' && inputs.phone_no !== '' && inputs.email_add ){
//       try{
        
        // const response = await FetchAPI.updateContent({ id:props.data.id, phone_no: inputs.phone_no, address: inputs.address, email_add: inputs.email_add });
// console.log(response)
//         // if(response.is_successful === true){
//         //     mainProps.history.push(pathLink);
//         // }else {
//         //   if(operation === 'add'){
//         //     alert('operation failed');
//         //   }            
//       }catch(e){
//         console.log('Error...',e);
//       }
//     }else{
      alert('Need all fields')
    // }
  }

        return (
         <div>

               <Header {...mainProps}/>
                 <Sidebar/> 
                
                <div  className="content-wrapper" style={{minHeight: '1200.88px'}}>
                <div className="sidebar-overlay" id="sidebar-overlay" />
                <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle" />
                <div className="mobile-menu-handle" />
                <article className="content item-editor-page">
                  <div className="title-block">
                    
                    <h3 className="title"> 
                    Update Contact


                    <a href= "/Contact" >
                    <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          <span className="sr-only">Close</span>
                        
                        </button>
                    </a>
                    
                                        
                    <span className="sparkline bar" data-type="bar" />
                    </h3>
                  </div>
                    <div className="card card-block">
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px',marginTop:'20px'}}> Address: </label>
                        <div className="col-sm-10">
                          <input className="form-control boxed" placeholder type="text" value = {inputs.address} style={{marginTop:'20px'}} name="address" onChange={handleChange } required />                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Phone_no </label>
                        <div className="col-sm-10">
                          <input className="form-control boxed" placeholder type="text" value = {inputs.phone_no}  name="phone_no" onChange={handleChange } required />                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Email: </label>
                        <div className="col-sm-10">
                        <input type="email" id="email" class="form-control py-2" value={inputs.email_add} required/>                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10 col-sm-offset-2">
                          <button type="button"  className="btn btn-primary" onClick={(e) => submitHandle(e)} style={{marginLeft:'20px'}}>   Update </button>
                        </div>
                      </div>                      
                    </div>
                </article>
                            
              </div>
            </div>
            );
        };