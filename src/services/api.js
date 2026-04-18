import axios from "axios";

const API = axios.create({
  baseURL: "https://collegepredictor-backend.onrender.com"
});

export const predictCollege = (rank, gender, category, exam) => {
  return API.get("/api/predictCollege", {
    params: {
      rank,
      gender,
      category,
      exam
    }
  });
};
