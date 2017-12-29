import axios from 'axios';
import { FETCH_USER, FETCH_ALL_LAND, FETCH_LAND } from './types';

export const readUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createLand = (values, history) => async dispatch => {
  console.log('createLand', values);
  const res = await axios.post('/api/land', values);
  dispatch({ type: FETCH_ALL_LAND, payload: res.data });
  history.push('/land');
};

export const readAllLand = () => async dispatch => {
  const res = await axios.get('/api/land');

  dispatch({ type: FETCH_ALL_LAND, payload: res.data });
};

export const readLand = (id) => async dispatch => {
  const res = await axios.get(`/api/land/${id}`);

  dispatch({ type: FETCH_LAND, payload: res.data });
};

export const updateLand = (values, history) => async dispatch => {
  const res = await axios.put(`/api/land`, values);
  dispatch({ type: FETCH_LAND, payload: res.data });
  history.push('/land');
};
