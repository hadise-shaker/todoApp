import { login, registerUser, logout } from "../../api/login";
import { ActionTypes } from "../types/actionTypes";

import api from "../../api/login";

export const register = (username, email, password, age) => (dispatch) => {
  return registerUser(username, email, password, age).then(
    (res) => {
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
      });
    },
    (error) => {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
      });
    }
  );
};

export const loginUser = (username, password) => (dispatch) => {
  return login(username, password).then(
    (data) => {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { user: data },
      });
    },
    (error) => {
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
      });
    }
  );
};

export const logoutUser = () => (dispatch) => {
  logout();

  dispatch({
    type: ActionTypes.LOGOUT,
  });
};
