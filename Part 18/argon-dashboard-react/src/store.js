import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "reducers/rootReducer";
function configureStore(state = { authState: {}, statCardState: {} }) {
  return createStore(rootReducer, state, applyMiddleware(reduxThunk));
}
export default configureStore;
