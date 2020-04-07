import React from 'react';

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            {/* <li className="nav-item d-none d-sm-inline-block">
              <a  className="nav-link">Home</a>
            </li> */}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/logout">                 
            <i class="fas fa-sign-out-alt" ><span>Logout</span> </i>
            </a>
          </li>
        </ul>
      </nav>
    )
}


