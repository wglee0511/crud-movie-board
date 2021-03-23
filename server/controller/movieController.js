import movieData from "../models/movieModels";

const createMovie = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(404).json({
      success: false,
      error: "You must provide a movie",
    });
  }
  const createMov = new movieData(body);

  createMov
    ?.save()
    .then(() =>
      res
        .status(200)
        .json({ success: true, id: createMov._id, message: "Movie Created!" })
    )
    .catch((error) => res.status(400).json({ success: false, error: error }));
};

const getMovie = (req, res) => {
  const {
    params: { id },
  } = req;
  const findMovie = new movieData.findById(id, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!findMovie) {
      return res.status(404).json({
        success: false,
        error: "Movie not found",
      });
    }
    return res
      .status(200)
      .json({
        success: true,
        data: data,
      })
      .catch((error) => console.error(error));
  });
};

const getMovies = async (req, res) => {
  const movies = await movieData.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!data.length) {
      return res.status(404).json({
        success: false,
        data: "Movie not found",
      });
    }
    return res
      .status(200)
      .json({
        success: true,
        data: data,
      })
      .catch((error) => console.error(error));
  });
};

export { createMovie, getMovie, getMovies };
