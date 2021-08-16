export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));
  console.log("user", user);
  if (user) {
    // For Spring Boot back-end
    return { authorization: "Bearer " + user };

    // for Node.js Express back-end
    /*     return { "x-access-token": user.accessToken }; */
  } else {
    return {};
  }
}
