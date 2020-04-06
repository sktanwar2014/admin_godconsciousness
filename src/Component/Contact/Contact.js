import React, {Component, Fragment,useState, useEffect} from 'react';
import Header from '../SubComponent/Header.js'
import Sidebar from '../SubComponent/Sidebar.js'
import Footer from '../SubComponent/Footer.js'
import api from '../../api/APIs.js'
import { Link } from 'react-router-dom';
//import  {APP_TOKEN} from '../../api/config/Constants'
export default function Contact() {
 
  const [contacts, setcontacts] = useState([]);
  
  const fetchcontacts = async () => {
    try{
      const result = await api.getcontact({});
      setcontacts(result.contactList);
      //APP_TOKEN.set(result)
     // APP_TOKEN.get().token
      //APP_TOKEN.remove()
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchcontacts();
    
  },[]);
  
    return(
    <Fragment>
      <Header/>
      <Sidebar/>
      <div className="content-wrapper" style={{minHeight: '1200.88px'}}>
                  {/* Content Header (Page header) */}
                  <section className="content-header">
                    <div className="container-fluid">
                      <div className="row mb-2">
                        <div className="col-sm-6">
                          <h1>Contacts</h1>
                        </div>
                        <div className="col-sm-6">
                          <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Contacts</li>
                          </ol>
                        </div>
                      </div>
                    </div>{/* /.container-fluid */}
                  </section>
  {/* Main content */}
  <section className="content">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
          <div class="row mb-2">
          
          <div class="col-sm-12">
           
           
          <div className="col-sm-1" style={{float:'right'}}>  
            <button type="button" class="btn btn-block btn-secondary btn-sm" >Add</button>
          </div>  
          </div>
        </div>
          </div>
          {/* /.card-header */}

          <div className="card-body">
         
            <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
              <div className="row">
                <div className="col-sm-12 col-md-6" />
                <div className="col-sm-12 col-md-6" />
                </div><div className="row">
                  <div className="col-sm-12">
                    <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
                  <thead>
                    <tr role="row">
                      <th style={{minWidth:'30px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} >ID</th>
                      <th  style={{minWidth:'150px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Address</th>
                      <th  style={{minWidth:'200px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Phone_no</th>
                      <th  style={{minWidth:'200px'}}  tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Email_address</th>
                   
                      <th style={{minWidth:'100px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Action</th>
                    </tr>
                  </thead>
                    <tbody>
                      {
                        (contacts.length > 0 ? contacts : []).map((data, index) => {
                          return(
                            <tr role="row" className="odd">
                              <td tabIndex={0} className="sorting_1">{index + 1}</td>
                              <td>{data.address}</td>
                              <td>{data.phone_no}</td>
                              <td>{data.email_add}</td>
                             
                              <td> 
                                <center>
                                <Link to= {{pathname:"/updateContact", state : {type:'contact', operation: 'update', data: data}}}> <i class="fas fa-edit" style={{fontSize:'20px',fontWeight:'normal'}}></i></Link>
                     
                                </center>
                              </td>                          
                            </tr>
                          )
                          })
                      }
                    </tbody>
                  
                  </table></div>
                  </div>
                  

                                       
            </div>
                          
         </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        
        {/* /.card */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </section>

</div>
      <Footer/>
    </Fragment>
      
    )
  }
