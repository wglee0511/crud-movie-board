import express from "express";
import {
  createMovie,
  getMovie,
  getMovies,
} from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.post("/movie", createMovie);
movieRouter.get("/movies", getMovies);
movieRouter.get("/movie/:id", getMovie);

export default movieRouter;
