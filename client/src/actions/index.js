import axios from 'axios';
import { FETCH_USER, READ_ALL_LAND, READ_LAND, CREATE_LAND } from './types';

export const readUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createLand = (values, history) => async dispatch => {
  console.log('createLand', values);
  const res = await axios.post('/api/land', values);
  dispatch({ type: CREATE_LAND, payload: res.data });
  console.log('res', res);
  history.push('/land/' + res.data._id);
};

export const readAllLand = () => async dispatch => {
  const res = await axios.get('/api/land');

  dispatch({ type: READ_ALL_LAND, payload: res.data });
};

export const readLand = (id) => async dispatch => {
  const res = await axios.get(`/api/land/${id}`);
  dispatch({ type: READ_LAND, payload: res.data });
};

export const updateLand = (values, history) => async dispatch => {
  const res = await axios.put(`/api/land`, values);
  dispatch({ type: READ_LAND, payload: res.data });
  history.push('/land');
};
