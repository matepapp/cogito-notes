import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authConstants } from '../constants';
import { hasToken } from '../helpers';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);
