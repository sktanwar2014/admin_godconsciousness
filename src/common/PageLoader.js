import React, { Component } from 'react';

const PageLoader = () => {
    return(
        <div style= {{alignItems: 'center', display: 'flex', justifyContent: 'center', height: '100%'}}>
            <svg class="circular" width="48px" height="48px">
                <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
                <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/>
            </svg>
        </div>
    )
}

export default PageLoader;