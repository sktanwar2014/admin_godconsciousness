import React, {Component, Fragment,useState, useEffect} from 'react';
import Header from '../SubComponent/Header.js'
import Sidebar from '../SubComponent/Sidebar.js'
import Footer from '../SubComponent/Footer.js'
import api from '../../api/APIs.js'

export default function Miracle() {
 
  const [prayers, setprayers] = useState([]);
  
  const fetchPrayer = async () => {
    try{
      const result = await api.getPrayers({});
      setprayers(result.PrayersList);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchPrayer();
    
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
                          <h1>Prayers</h1>
                        </div>
                        <div className="col-sm-6">
                          <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Prayers</li>
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
                      <th  style={{minWidth:'150px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Prayer</th>
                 
                      <th  style={{minWidth:'200px'}}  tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Posted at</th>
                      <th style={{minWidth:'200px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Posted by</th>
                      <th style={{minWidth:'100px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Action</th>
                    </tr>
                  </thead>
                    <tbody>
                      {
                        (prayers.length > 0 ? prayers : []).map((data, index) => {
                          return(
                            <tr role="row" className="odd">
                              <td tabIndex={0} className="sorting_1">{index + 1}</td>
                              <td>{data.prayer}</td>
                              <td>{data.created_at}</td>
                              <td>{data.created_by}</td>
                              <td> 
                                <center>
                                  <i class="fas fa-edit" style={{fontSize:'20px', paddingLeft:'10px',fontWeight:'normal'}}></i>
                                  <i class="fas fa-trash-alt"style={{fontSize:'20px',paddingLeft:'10px',fontWeight:'normal'}}></i>
                                </center>
                              </td>                          
                            </tr>
                          )
                          })
                      }
                    </tbody>
                  
                  </table></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 41 to 50 of 57 entries</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                      <ul className="pagination">
                         <li className="paginate_button page-item previous disabled" id="example2_previous">
                          <a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a>
                         </li>
                         <li className="paginate_button page-item active">
                          <a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
                         </li>
                         <li className="paginate_button page-item y ">
                          <a href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">2</a>
                         </li>
                         <li className="paginate_button page-item ">
                          <a href="#" aria-controls="example2" data-dt-idx={3} tabIndex={0} className="page-link">3</a>
                         </li>
                         <li className="paginate_button page-item ">
                          <a href="#" aria-controls="example2" data-dt-idx={4} tabIndex={0} className="page-link">4</a>
                         </li>
                         <li className="paginate_button page-item ">
                          <a href="#" aria-controls="example2" data-dt-idx={5} tabIndex={0} className="page-link">5</a>
                         </li>
                         <li className="paginate_button page-item ">
                           <a href="#" aria-controls="example2" data-dt-idx={6} tabIndex={0} className="page-link">6</a>
                          </li>
                          <li className="paginate_button page-item next" id="example2_next">
                            <a href="#" aria-controls="example2" data-dt-idx={7} tabIndex={0} className="page-link">Next</a>
                          </li>
                      </ul>

                      </div>
                    </div>
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
