import { getAllTask, addTask, deleteAtask } from "../../api/tasks";

import { ActionTypes } from "../types/actionTypes";

export const setTasks = (tasks) => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: tasks,
  };
};

export function createTask(data) {
  return {
    type: ActionTypes.ADD_TASK,
    payload: data,
  };
}
export function removeTask(id) {
  return {
    type: ActionTypes.REMOVE_TASK,
    payload: id,
  };
}
export function setLoading() {
  return {
    type: ActionTypes.LOADING,
  };
}
export const getTasks = () => async (dispatch, getState) => {
  let res = await getAllTask();
  dispatch(setTasks(res));
  dispatch(setLoading());
};
export const addATask = (task) => async (dispatch, getState) => {
  let result = await addTask(task);
  dispatch(createTask(task));
  dispatch(setLoading());
};
export const deleteTask = (id) => async (dispatch) => {
  await deleteAtask(id).then((res) => console.log("res", res));
  dispatch(removeTask(id));
};
