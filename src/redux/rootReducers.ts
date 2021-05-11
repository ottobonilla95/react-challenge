import { combineReducers } from "redux";

// reducers
import carReducer from "./car/reducers";

export const reducers = combineReducers({ car: carReducer });

export default reducers;
export type RootState = ReturnType<typeof reducers>;
