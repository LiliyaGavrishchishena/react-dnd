import types from './formsActionTypes';

const fetchFormsRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchFormsSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: users,
});

const fetchFormsError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  fetchFormsRequest,
  fetchFormsSuccess,
  fetchFormsError,
};
