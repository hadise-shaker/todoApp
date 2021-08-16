import axios from "axios";

export const login = async (email, password) => {
  let res = await axios({
    method: "post",
    url: "https://api-nodejs-todolist.herokuapp.com/user/login",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
      email,
      password,
    }),
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
  });
  return res;
};
