import { ActionTypes } from "../types/actionTypes";

const initialState = {
  task: [],
  loading: true,
};

export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOADING:
      return { ...state, loading: false };
    case ActionTypes.ADD_TASK:
      return { ...state.task, task: payload };

    case ActionTypes.REMOVE_TASK:
      return {
        task: state.task.filter(({ id }) => id !== payload),
      };

    default:
      return state;
  }
};
