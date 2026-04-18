import axios from "axios";

const API = axios.create({
baseURL: "https://collegepredictor-backend.onrender.com"});

export const getGender = (exam) => {
  return API.get("/api/getGender", {
    params: {
      exam
    }
  });
};
