import axios from 'axios';

const baseURL = () => {
  axios.defaults.baseURL = 'http://forms-app.brutgroot.com/';
};

export default {
  baseURL,
};
