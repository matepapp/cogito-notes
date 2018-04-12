// @flow
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from '../components';
import { history } from '../helpers';
import { HomePage, WelcomePage } from '../pages';
import { type State } from '../reducers';
import './App.css';

type Props = {
  loggedIn: boolean,
};

class App extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    nextProps.loggedIn ? history.push('/') : history.push('/login');
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={WelcomePage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps)(App);
