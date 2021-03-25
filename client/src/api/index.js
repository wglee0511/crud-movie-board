import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const insertMovies = (body) => api.post("/movie", body);
export const getAllMovies = () => api.get("/movies");
export const getMovieById = (id) => api.get(`/movie/${id}`);
export const updateMovie = (id, body) => api.put(`/movie/${id}`, body);
export const deleteMovue = (id) => api.delete(`/movie/${id}`);

const apiForMovies = {
  insertMovies,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovue,
};

export default apiForMovies;
