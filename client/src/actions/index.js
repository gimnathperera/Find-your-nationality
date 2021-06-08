import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { SET_ACCESS_TOKEN, GET_NATIONALITY_LIST } from './types';
import { BASE_URL } from '../configurations';
import setJWTToken from '../security/setJWT';

axios.defaults.baseURL = BASE_URL;

export const fetchAcessToken = () => async (dispatch) => {
  try {
    const response = await axios.get(`/token`);

    response?.data?.data ? localStorage.setItem('token', response.data.data) : localStorage.clear();
    setJWTToken(response?.data?.data);
    dispatch({ type: SET_ACCESS_TOKEN, payload: response?.data });
  } catch (err) {
    toastr.error('Error', err?.message);
  }
};

export const fetchNationlities = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`/nationality/${name}`);
    const nationalityList = response?.data?.data;
    if (nationalityList.length > 0) {
      dispatch({ type: GET_NATIONALITY_LIST, payload: response?.data?.data });
    } else {
      toastr.warning('Warning', 'Check your name, try again!');
      dispatch({ type: GET_NATIONALITY_LIST, payload: [] });
    }
  } catch (err) {
    toastr.error('Error', err?.message || 'Network error');
  }
};
