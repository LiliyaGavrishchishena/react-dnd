import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// configs
import routes from '../configs/routes';
import navItems from '../configs/main-nav';

// components
import NavBar from './NavBar';
import ConstructorPage from '../pages/ConstructorPage';
import ResultsPage from '../pages/ResultsPage';
import FormPage from '../pages/FormPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar items={navItems} />

        <Switch>
          <Route exact path={routes.CONSTRUCTOR} component={ConstructorPage} />
          <Route exact path={routes.RESULTS} component={ResultsPage} />
          <Route exact path={routes.FORM} component={FormPage} />
          <Redirect to="/form" />
        </Switch>
      </div>
    );
  }
}
