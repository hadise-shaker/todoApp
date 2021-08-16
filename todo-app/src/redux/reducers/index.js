import { combineReducers } from "redux";
import { messageReducer } from "./messageReducer";
import { userReducer } from "./userReducer";
import { tasksReducer } from "./tasksReducer";
export const reducers = combineReducers({
  message: messageReducer,
  user: userReducer,
  tasks: tasksReducer,
});
