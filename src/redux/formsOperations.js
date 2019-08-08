import axios from 'axios';

import actions from './formsActions';
import axiosParams from '../configs/base-url';

const getForms = () => dispatch => {
  dispatch(actions.fetchFormsRequest());
  axiosParams.baseURL();

  axios
    .get('/shpax/forms/list')
    .then(({ data }) => {
      const forms = {
        data,
        length: data.length,
      };
      dispatch(actions.fetchFormsSuccess(forms));
    })
    .catch(error => dispatch(actions.fetchFormsError(error)));
};

export default {
  getForms,
};
