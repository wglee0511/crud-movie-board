import express from "express";
import { getMovies } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.get("/movies", getMovies);

export default movieRouter;
