import axios from "axios";

let baseURL = "https://apisalon.softelsolutions.in";

export const login = async (username, password) => {
  let response = await axios.post(baseURL + "/api/Login/UserLogin", {
    username: username,
    password: password,
  });

  // console.log(response);
  return response;
};
