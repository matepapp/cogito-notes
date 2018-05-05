// @flow
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { PrivateRoute } from '../components';
import { PATH } from '../constants';
import { history } from '../helpers';
import { notificationActions } from '../actions';
import { HomePage, WelcomePage } from '../pages';
import type { Dispatch } from '../types';
import type { State } from '../reducers';

type Props = {
  loggedIn: boolean,
  notificationType?: string,
  notificationMessage?: string,
};

type ActionProps = { clearNotification: () => void };

class App extends React.Component<Props & ActionProps> {
  componentWillReceiveProps(nextProps: Props) {
    const { loggedIn, notificationMessage, notificationType } = nextProps;
    console.log(loggedIn);
    loggedIn ? history.push(PATH.NOTES) : history.push(PATH.LOGIN);

    if (notificationMessage !== undefined && notificationType !== undefined)
      this.renderNotification(notificationType, notificationMessage);
  }

  renderNotification = (type: string, message: string) => {
    notification[type]({
      message: type.toUpperCase(),
      description: message,
    });
    this.props.clearNotification();
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path={PATH.ROOT} component={HomePage} />
          <PrivateRoute path={PATH.NOTES} component={HomePage} />
          <PrivateRoute path={PATH.SHARED} component={HomePage} />
          <Route exact path={PATH.LOGIN} component={WelcomePage} />
          <Route exact path={PATH.REGISTRATION} component={WelcomePage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: State): Props => ({
  loggedIn: state.auth.loggedIn,
  notificationType: state.notification.type,
  notificationMessage: state.notification.message,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  clearNotification: () => dispatch(notificationActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
