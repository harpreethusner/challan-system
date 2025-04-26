import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const login = async (username, password) => {
  try {
    debugger;
    const response = await axios.post(baseURL + "/api/Login/UserLogin", {
      username,
      password,
    });

    return response;
  } catch (error) {
    console.error("Login failed:", error.message);  
    return {
      success: false,
      message: "Login failed. Please check your credentials and try again.",
      error: error.response ? error.response.data : error.message,
    };
  }
};
