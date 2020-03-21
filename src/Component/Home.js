import React, {Component, Fragment} from 'react';
import Header from './SubComponent/Header.js';
import Sidebar from './SubComponent/Sidebar.js';
import Footer from './SubComponent/Footer.js';

export default class Home extends Component {
    render(){
        return(

            <div class="wrapper">
            <Fragment>
            <Header/>
            <Sidebar/>
 
            <Footer/>
            </Fragment>
            </div>
        )
    }
}