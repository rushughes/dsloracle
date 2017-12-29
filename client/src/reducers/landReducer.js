import { FETCH_ALL_LAND, READ_LAND, CREATE_LAND } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_LAND:
      return action.payload;
    case FETCH_ALL_LAND:
      return action.payload;
    case READ_LAND:
      return action.payload[0];
    default:
      return state;
  }
}
