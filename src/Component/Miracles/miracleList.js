import React,{Component, useState, useEffect} from 'react';
import Header from '../SubComponent/Header.js';
import Sidebar from '../SubComponent/Sidebar.js';


import Update from './update.js';
import Add from './add.js';
import {getDateInDDMMYYYY} from '../../Common/moment.js';

// API Call
import APIs from '../../api/APIs.js';



export default function MiracleList() {
  
  const [miracles, setMiracles] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const handleEventActiveDeactive = async (event) => {
    try{
      const result = await APIs.handleEventActiveDeactive({id: event.id, is_active: event.is_active});
      setMiracles(result.miracleList);
    }catch(e){
      console.log(e);
    }
  }
  
  
  const fetchMiracle = async () => {
    try{
      const result = await APIs.getmiracles({});
      setMiracles(result.miracleList);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    fetchMiracle();
  },[]);

  const handleEditOpen = (data) => {
    setRowData(data);
    setEditOpen(true);
  }

  const handleEditClose = () => {
    setEditOpen(false);
  }




  return(
    <section>
      <Header />
      <Sidebar/>
        <div className="content-wrapper" style={{minHeight: '1200.88px'}}>         
          <section className="content">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div class="row mb-2">
                      <div class="col-sm-11">
                        <h3>Miracles</h3>
                      </div>
                      <div className="col-sm-1"style={{float:'right'}}>
                          <button type="button" onClick={()=>{setAddOpen(true)}} class="btn btn-block btn-secondary btn-sm" >Add</button>
                      </div>  
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
                        <div className="row">
                          <div className="col-sm-12">
                            <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
                              <thead>
                                <tr role="row">
                                    <th style={{minWidth:'30px'}} tabIndex={0} aria-controls="example2"  >ID</th>
                                    <th  style={{minWidth:'150px'}} tabIndex={0} aria-controls="example2" >Title</th>
                                    <th  style={{minWidth:'200px'}} tabIndex={0} aria-controls="example2" >Description</th>
                                    <th style={{minWidth:'200px'}} tabIndex={0} aria-controls="example2" >Event Date</th>
                                    <th style={{minWidth:'100px'}} tabIndex={0} aria-controls="example2" >Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                (miracles.length > 0 ? miracles : []).map((data, index) => {
                                  return(
                                    <tr role="row" className="odd">
                                      <td tabIndex={0} className="sorting_1">{index + 1}</td>
                                      <td style={{textAlign:'justify'}}>{data.title}</td>
                                      <td style={{textAlign:'justify'}}>{data.descrpition}</td>
                                      <td>{getDateInDDMMYYYY(data.event_date)}</td>
                                      <td>
                                        <a onClick={()=>{handleEditOpen(data)}}><i class="fas fa-edit" style={{fontSize:'20px',fontWeight:'normal'}}></i></a>
                                        <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success" >
                                          <input type="checkbox" onChange={() =>{handleEventActiveDeactive(data)}} checked={data.is_active} class="custom-control-input" id="customSwitch3" />
                                          <label class="custom-control-label" for="customSwitch3"></label>
                                        </div>
                                      </td>                          
                                    </tr>
                                  )
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    {editOpen ? <Update open={editOpen} handleClose = {handleEditClose} rowData = {rowData} setMiracles = {setMiracles} /> : null} 
    {addOpen ? <Add open={addOpen} handleClose = {setAddOpen} setMiracles = {setMiracles} /> : null}
  </section>
  )
}
