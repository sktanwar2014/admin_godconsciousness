import React,{Component, useState, useEffect} from 'react';
import Header from '../SubComponent/Header.js';
import Footer from '../SubComponent/Footer.js';
import Sidebar from '../SubComponent/Sidebar.js';
import { Link } from 'react-router-dom';

// API Call
import APIs from '../../api/APIs.js';



export default function MiracleList() {
  
  
  const [miracles, setMiracles] = useState([]);
  
  
  const handleEventActiveDeactive = async (miracle) => {
     try{
       const result = await APIs.handleEventActiveDeactive1({id: miracle.id, is_active: miracle.is_active});
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
        return(
            <section>
              <Header />
              <Sidebar/>
              
                <div className="content-wrapper" style={{minHeight: '1200.88px'}}>
                  {/* Content Header (Page header) */}
                  <section className="content-header">
                    <div className="container-fluid">
                      <div className="row mb-2">
                        <div className="col-sm-6">
                          <h1>Miracles</h1>
                        </div>
                        <div className="col-sm-6">
                          <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Miracles</li>
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
           
           
          <div className="col-sm-1"style={{float:'right'}}>
       
          
          
          <Link to= {{pathname:"/insertMiracle", state : {type:'miracle'}}}>  <button type="button" class="btn btn-block btn-secondary btn-sm" >Add</button></Link>
          
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
                      <th  style={{minWidth:'150px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Title</th>
                      <th  style={{minWidth:'200px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Description</th>
                      <th  style={{minWidth:'200px'}}  tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Posted by</th>
                      <th style={{minWidth:'200px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Posted on</th>
                      <th style={{minWidth:'100px'}} tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1}>Action</th>
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
                              <td>{data.created_on}</td>
                              <td>{data.created_by}</td>
                              <td> 
                                <center>
                                <Link to= {{pathname:"/updateEvent", state : {type:'event', operation: 'update', data: data}}}> <i class="fas fa-edit" style={{fontSize:'20px',fontWeight:'normal'}}></i></Link>
                                
                                <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success" >
                      <input type="checkbox" onChange={() =>{handleEventActiveDeactive(data)}} checked={data.is_active}  class="custom-control-input" id="customSwitch3" />
                      <label class="custom-control-label" for="customSwitch3"></label>
                    </div>
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
  {/* /.content */}
  {/* <script>
  $(document).ready(function() {
   
    $('#example2_paginate').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    })
  });
</script> */}
</div>

<Footer />

</section>
        )
    }
