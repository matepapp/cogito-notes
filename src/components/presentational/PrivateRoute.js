import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { hasToken } from '../../helpers';
import { PATH } from '../../constants';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: PATH.LOGIN, state: { from: props.location } }} />
      )
    }
  />
);
