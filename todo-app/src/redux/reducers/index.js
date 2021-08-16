import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tasksReducer } from "./tasksReducer";
export const reducers = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
});
