/******************************************
 *  Author : Jake   
 *  Created On : Wed Oct 24 2018
 *  File : routes.js
 *******************************************/


import React                from 'react';

import { Meteor }           from 'meteor/meteor';
import { Router,
         Route,
         browserHistory }   from 'react-router';

import Signup               from './../ui/Signup';
import Dashboard            from './../ui/Dashboard';
import NotFound             from './../ui/NotFound';
import Login                from './../ui/Login';


const unauthenticatedPages  = ['/', '/signup'];
const authenticatedPages    = ['/dashboard'];

const onEnterPublicPage     = () => {

  if ( Meteor.userId() ) browserHistory.replace('/dashboard');

};

const onEnterPrivatePage     = () => {

  if ( !Meteor.userId() ) browserHistory.replace('/');

};

export const onAuthChange = (isAuthenticated) => {

    const pathname              = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAauthenticatedPage  = authenticatedPages.includes(pathname);

    // If accessing unauthenticated page & user is logged in redirect to /dashboard.
    if ( isUnauthenticatedPage && isAuthenticated ) browserHistory.replace('/dashboard');

    // If accessing authenticatetd page & user is not logged in redirect to /.
    if ( isAauthenticatedPage && !isAuthenticated ) browserHistory.replace('/');

};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/"               component={Login}         onEnter={onEnterPublicPage} />
    <Route path="/signup"         component={Signup}        onEnter={onEnterPublicPage} />
    <Route path="/dashboard"      component={Dashboard}     onEnter={onEnterPrivatePage} />
    <Route path="*"               component={NotFound} />
  </Router>
);





/*** Scripts end... */