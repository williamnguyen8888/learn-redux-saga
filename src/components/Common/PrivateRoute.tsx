import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';


export function PrivateRoute(props: RouteProps) {
  //check if user is logged in
  // if yes, show route
  //otherwisw, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('acces_token'));
  if (!isLoggedIn) return <Redirect to='/login' />;
  return <Route {...props} />;
};