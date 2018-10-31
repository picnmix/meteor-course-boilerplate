/******************************************
 *  Author : Jake   
 *  Created On : Tue Oct 23 2018
 *  File : Link.js
 *******************************************/


import React                from 'react';

import PrivateHeader        from './PrivateHeader';


export default () => {

    return (
        <div>
            <PrivateHeader title="Dashboard" />
            <div className="page-content-wrapper">
                Dashboard page content...
            </div>
        </div>
    );

};



/*** Scripts end... */