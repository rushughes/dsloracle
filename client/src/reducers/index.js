import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import landReducer from './landReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  land: landReducer,
});
