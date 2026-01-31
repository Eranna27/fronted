import axios from "axios";
import { BASE_URL } from "./Helper";

// Common API Request
const commonRequest = async (method, url, data) => {
  const config = {
    method,
    url,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios(config);
};
// Login API
export const LoginFunction = async (data) => {
  return await commonRequest("POST", `${BASE_URL}/login`, data);
};

//add register
export const registerFunction = async (data, header) => {
  return await commonRequest(
    "POST",
    `${BASE_URL}/register`,
    data,
    header
  );
};



// git init
// git add .
// git commit -m "Initial commit"
// git branch -M main
// git remote add origin https://github.com/Eranna27/fronted.git
// git push -u origin main