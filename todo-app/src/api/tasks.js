import axios from "axios";
import authHeader from "./auth-header";
const URL = "https://api-nodejs-todolist.herokuapp.com/task/";
/* const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
}; */
/* export const getAllTask = async () => {
  return axios.get(URL, {
    headers: authHeader(),
    "content-type": "application/json",
  });
}; */
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
/* export const getAllTask = async () => {
  const user = JSON.parse(localStorage.getItem("token"));
  return axios.get(URL, {
    headers: {
      authorization: `Bearer ${user}`,
      "content-type": "application/json",
    },
  });
}; */
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
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return data;
};

export const UpdateTaskById = async (id) => {
  const data = await axios
    .put(URL + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
/* export const deleteAtask = async (id) => {
  await axios.delete(URL + id).then((res) => {
    console.log(res);
  });
};
 */
export const deleteAtask = async (id) => {
  let res = await axios({
    method: "delete",
    url: URL + id,
    headers: authHeader(),
    "content-type": "application/json",
  });
  return res;
};
