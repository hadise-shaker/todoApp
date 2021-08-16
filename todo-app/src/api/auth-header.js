export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));
  /*   console.log("user", user); */
  if (user) {
    return { authorization: "Bearer " + user };
  } else {
    return {};
  }
}
