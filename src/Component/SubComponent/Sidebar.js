import React, {Component} from 'react';
import Event from '../Event/EventList.js'

export default class Sidebar extends Component {
    render() {
        return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
  <img src="docs/assets/img/logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" width="42" height="42" style={{opacity: '.8'}} />
  <span className="brand-text font-weight-light">Gods Consciousness</span>
</a>

  {/* Sidebar */}
  <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden"><div className="os-resize-observer-host"><div className="os-resize-observer observed" style={{left: '0px', right: 'auto'}} /></div><div className="os-size-auto-observer" style={{height: 'calc(100% + 1px)', float: 'left'}}><div className="os-resize-observer observed" /></div><div className="os-content-glue" style={{margin: '0px -8px', width: '73px', height: '441px'}} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: 'scroll'}}><div className="os-content" style={{padding: '0px 8px', height: '100%', width: '100%'}}>
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
          <a href="#" className="d-block">DA</a>
          </div> 
          <div className="info">
          
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
           
            <li className="nav-item">
              <a href="" className="nav-link">
              <i className="nav-icon fa fa-home fa" />
                <p>
                  Home
                  
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href='/Event' className="nav-link">                
                <i className="nav-icon fas fa-copy" />
                <p> Events </p>
              </a>
              
            </li>
            <li className="nav-item has-treeview">
              <a href="/Miracle" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Miracles
                
                </p>
              </a>
              
            </li>
            <li className="nav-item has-treeview">
              <a href="/Prayer" className="nav-link">
                <i className="nav-icon fas fa-tree" />
                <p>
                  Prayer
                
                </p>
              </a>
              
            </li>
            <li className="nav-item has-treeview">
              <a href="/Direction" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p>
                  Direction's
               
                </p>
              </a>
              
            </li>
            <li className="nav-item has-treeview">
              <a href="/obe" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  OBE'S
                 
                </p>
              </a>
           
            </li>
            <li className="nav-item has-treeview">
              <a href="/Contact" className="nav-link">
                <i className="nav-icon fa fa-phone fa" />
                <p>
                  Contact
                 
                </p>
              </a>
           
            </li>
 
            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-user-alt" />
                  <p>
                    About
                     <i className="right fas fa-angle-left" />
                  </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>About GC</p>
                  </a>
                </li>
               
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Introduction</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Miss Dimple Anil</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Social
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              
            </li>
            
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{width: '100%', transform: 'translate(0px, 0px)'}} /></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{height: '42.788%', transform: 'translate(0px, 84.9408px)'}} /></div></div><div className="os-scrollbar-corner" /></div>

  {/* /.sidebar */}
</aside>


</div>
        )
    }
}