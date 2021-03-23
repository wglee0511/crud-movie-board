import express from "express";
import { createMovie, getMovies } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.post("/movie", createMovie);
movieRouter.get("/movies", getMovies);

export default movieRouter;
