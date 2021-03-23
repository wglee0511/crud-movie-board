import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const movieData = mongoose.model("movieData", movieSchema);

export default movieData;
