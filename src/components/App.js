import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// configs
import routes from '../configs/routes';
import navItems from '../configs/main-nav';
import constants from '../configs/constants';

// components
import Dashboard from './Dashboard';
import ConstructorPage from '../pages/ConstructorPage';
import ResultsPage from '../pages/ResultsPage';
import FormPage from '../pages/FormPage';

import { formsSelectors, formsOperations } from '../redux';

class App extends Component {
  componentDidMount() {
    const { getForms } = this.props;
    getForms();
  }

  getForms = () => {
    const { forms, currentPage } = this.props;
    const formsLength = constants.LIMIT_AMOUNT_OF_FORMS;

    const formsViev =
      currentPage === 1
        ? forms.slice(0, formsLength)
        : forms.slice(
            currentPage * formsLength - formsLength,
            currentPage * formsLength,
          );

    return formsViev;
  };

  render() {
    return (
      <div>
        <Dashboard items={navItems} />

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

const mapStateToProps = state => ({
  forms: formsSelectors.getForms(state),
});

const mapDispatchToProps = {
  getForms: formsOperations.getForms,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
