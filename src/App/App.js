// @flow
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { PrivateRoute } from '../components';
import { history } from '../helpers';
import { HomePage, WelcomePage } from '../pages';
import { type State } from '../reducers';
import './App.css';

type Props = {
  loggedIn: boolean,
  notificationType: ?string,
  notificationMessage: ?string,
};

class App extends React.Component<Props> {
  componentDidUpdate() {
    const { loggedIn, notificationMessage, notificationType } = this.props;
    loggedIn ? history.push('/') : history.push('/login');

    if (notificationMessage != null && notificationType != null)
      this.renderNotification(notificationType, notificationMessage);
  }

  renderNotification = (type: string, message: string) => {
    notification[type]({
      message: type.toUpperCase(),
      description: message,
    });
  };

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
    notificationType: state.notification.type,
    notificationMessage: state.notification.message,
  };
};

export default connect(mapStateToProps)(App);
