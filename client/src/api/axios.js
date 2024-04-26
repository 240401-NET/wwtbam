import axios from "axios";

export const apiClient = axios.create({
  baseUrl: "http://localhost:5211/api",
});