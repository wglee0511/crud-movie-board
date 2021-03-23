import express from "express";
import {
  createMovie,
  getMovie,
  getMovies,
  upDateMovie,
} from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.post("/movie", createMovie);
movieRouter.get("/movies", getMovies);
movieRouter.get("/movie/:id", getMovie);
movieRouter.put("/movie/:id", upDateMovie);

export default movieRouter;
