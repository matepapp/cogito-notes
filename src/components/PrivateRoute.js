import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { hasToken } from '../helpers';
import { pathConstants } from '../constants';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: pathConstants.LOGIN, state: { from: props.location } }}
        />
      )
    }
  />
);
