import axios from "axios";
import { toast } from "react-toastify";
const URL = "https://api-nodejs-todolist.herokuapp.com/user/";

export const login = async (email, password) => {
  let res = await axios({
    method: "post",
    url: URL + "login",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    console.log(res.data.user.name);
    if (res.status === 200 || 201) {
      toast.success(`welcome ${res.data.user.name} ! `);
    } else {
      toast.error("login failed !");
    }
    if (res.data.token) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  });
  return res;
};
export const registerUser = async (email, password, name, age) => {
  let res = await axios({
    method: "post",
    url: "https://api-nodejs-todolist.herokuapp.com/user/register",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
      email,
      password,
      name,
      age,
    }),
  }).then((res) => {
    if (res.status === 200 || 201) {
      toast.success(
        `Registration completed successfully ${res.data.user.name}! `
      );
    } else {
      toast.error("Registration failed !");
    }
  });
  return res;
};
export const logout = () => {
  localStorage.removeItem("token");
};
