import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import RunnerPage from './containers/RunnerPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.RUNNER} component={RunnerPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
