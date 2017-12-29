import { FETCH_ALL_LAND, FETCH_LAND } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_LAND:
      return action.payload;
    case FETCH_LAND:
      return action.payload[0];
    default:
      return state;
  }
}
