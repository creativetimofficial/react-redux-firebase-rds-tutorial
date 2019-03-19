import { combineReducers } from "redux";
import authReducer from "reducers/authReducer";
import statCardReducer from "reducers/statCardReducer";
export default combineReducers({
  // the authReducer will work only with authState
  authState: authReducer,
  // the statCardReducer will work only with statCardState
  statCardState: statCardReducer
});
