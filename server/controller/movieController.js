import movieData from "../models/movieModels";

const getMovies = async (req, res) => {
  const movies = await movieData.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        data: data,
      });
    }
    if (!data.length) {
      return res.status(404).json({
        success: false,
        data: "Movie not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: data,
    });
  });
  console.log(movies);
};

export { getMovies };
