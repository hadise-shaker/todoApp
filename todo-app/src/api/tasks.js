import axios from "axios";
import authHeader from "./auth-header";
const URL = "https://api-nodejs-todolist.herokuapp.com/task/";
export const getAllTask = async () => {
  let res = await axios({
    method: "get",
    url: URL,
    headers: authHeader(),
    "content-type": "application/json",
  });
  console.log("res", res.data.data);
  return res.data.data;
};

export const addTask = async (task) => {
  let res = await axios({
    method: "post",
    url: URL,
    headers: authHeader(),
    "content-type": "application/json",
    data: task,
  });
  return res;
};

export const getATaskById = async (id) => {
  let res = await axios({
    method: "get",
    url: URL + id,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const getTaskByCompleted = async () => {
  const data = await axios({
    method: "GET",
    url: URL + "?completed=true",
    headers: authHeader(),
    "content-type": "application/json",
  }).catch((err) => console.log(err));
  return data;
};
export const deleteAtask = async (id) => {
  let res = await axios({
    method: "delete",
    url: URL + id,
    headers: authHeader(),
    "content-type": "application/json",
  });
  return res;
};
export const UpdateTaskById = async (id) => {
  const data = await axios
    .put(URL + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
