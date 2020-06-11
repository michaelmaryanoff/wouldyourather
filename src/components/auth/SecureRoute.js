import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Adapted from here: https://tylermcginnis.com/react-router-protected-routes-authentication/
const SecureRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authedUser ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default SecureRoute;
