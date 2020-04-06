import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Header from '../SubComponent/Header.js';
import Sidebar from '../SubComponent/Sidebar.js';
import {Redirect} from 'react-router-dom';


// import api
import FetchAPI from '../../api/APIs.js';

export default function DirectionEditor(mainProps) {
  const props = mainProps.location.state;
  

 //console.log(props)

  
  const [inputs, setInputs] = useState({id: '', title:'', description:''});  

  const handleChange  = (props) => {
    setInputs({...inputs, [props.target.name]: props.target.value});
  }

  useEffect(() => {
    if(Object.keys(props)[2] === 'data'){
      setInputs({title: props.data.title , description: props.data.description})
    }
  },[])



  const handleSubmit = async () => {
    if(inputs.id !== '',inputs.title !=='' && inputs.description !== '' ){
      try{
        
        const response = await FetchAPI.insertDirection({title: inputs.title, description: inputs.description});
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
    }
  }

  async function submitHandle(e) {
    e.preventDefault();

    const PARAMS = ({ methodType = 'GET' }) => ({
      method: methodType
    });

    const URL = `http://localhost:5000/api/insertDirection`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: { title: inputs.title, description: inputs.description},
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
                    Insert Direction


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
                      {/* <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px',marginTop:'20px'}}> ID: </label>
                        <div className="col-sm-10">
                          <input className="form-control boxed" placeholder type="text" value = {inputs.id} style={{marginTop:'20px'}} name="id" onChange={handleChange } required />                          
                        </div>
                      </div> */}
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Title </label>
                        <div className="col-sm-10">
                          <input className="form-control boxed" placeholder type="text" value = {inputs.title}  name="title" onChange={handleChange } required />                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Description </label>
                        <div className="col-sm-10">
                        <input className="form-control boxed" placeholder type="text" value = {inputs.description}  name="description" onChange={handleChange } required />          
                        </div>
                      </div>
                      {/* <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Posted_by </label>
                        <div className="col-sm-10">
                        <input type="text" id="posted_by" class="form-control py-2" value={inputs.posted_by} required/>                          
                        </div>
                      </div> */}
                      {/* <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" style={{paddingLeft:'30px'}}> Posted_on </label>
                        <div className="col-sm-10">
                        <input type="date" id="posted_on" class="form-control py-2" value={inputs.posted_on} required/>                          
                        </div>
                      </div> */}
                      <div className="form-group row">
                        <div className="col-sm-10 col-sm-offset-2">
                          <button type="button"  className="btn btn-primary" onClick = {handleSubmit()} style={{marginLeft:'20px'}}> Insert </button>
                        </div>
                      </div>                      
                    </div>
                </article>
                            
              </div>
            </div>
            );
        };