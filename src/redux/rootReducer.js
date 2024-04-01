import { combineReducers } from 'redux';

import userDetails from './slices/userData';


const rootReducer = combineReducers({
  userDetails:userDetails

});

export { rootReducer };
