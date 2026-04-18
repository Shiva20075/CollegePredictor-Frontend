import axios from "axios";

const API = axios.create({
baseURL: "https://collegepredictor-backend.onrender.com"});

export const getCategory = (exam) => {
  return API.get("/api/getCategory", {
    params: {
      exam
    }
  });
};
