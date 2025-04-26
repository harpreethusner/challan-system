import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

async function getVehicleCategory() {
  try {
    let res = await axios.get(baseURL + "/api/Master/FillVehicleCategory");
    return res;
  } catch (error) {
    return {
      status: 0,
      message: error.response ? error.response.data : error.message,
    };
  }
}

async function getChallanReason() {
  try {
    let res = await axios.get(baseURL + "/api/Master/FillChallanReason");
    return res;
  } catch (error) {
    return {
      status: 0,
      message: error.response ? error.response.data : error.message,
    };
  }
}

export { getVehicleCategory, getChallanReason };
