import { READ_ALL_LAND, READ_LAND, CREATE_LAND, READ_CATEGORY_LAND } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_LAND:
      return action.payload;
    case READ_ALL_LAND:
      return action.payload;
    case READ_CATEGORY_LAND:
      return action.payload;
    case READ_LAND:
      return action.payload[0];
    default:
      return state;
  }
}
