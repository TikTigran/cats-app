import { combineReducers } from "redux";
// REDUCERS
import commonReducer from "./common/common.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;
