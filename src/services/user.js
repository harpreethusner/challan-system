import axios from "axios";

let baseURL = "https://apisalon.softelsolutions.in";

export const login = async (username, password) => {
  try {
    const response = await axios.post(baseURL + "/api/Login/UserLogin", {
      username,
      password,
    });

    return response;
  } catch (error) {
    console.error("Login failed:", error.message);
    // You can return a custom error response or rethrow the error
    return {
      success: false,
      message: "Login failed. Please check your credentials and try again.",
      error: error.response ? error.response.data : error.message,
    };
  }
};
