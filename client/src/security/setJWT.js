import axios from 'axios';

const setJWTToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setJWTToken;
