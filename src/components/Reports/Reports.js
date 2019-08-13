import React, { Component } from 'react';
import { connect } from 'react-redux';

// configs
import constants from '../../configs/constants';

import { formsSelectors, formsOperations } from '../../redux';

class Reports extends Component {
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
    return <div>Reports</div>;
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
)(Reports);
