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

const getMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  const findMovie = await movieData.findById(id, (err, data) => {
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
  return movies;
};

const upDateMovie = async (req, res) => {
  const body = req.body;
  const {
    params: { id },
  } = req;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must submmit body to update",
    });
  }
  const findMovie = await movieData.findById(id, (err, data) => {
    if (err) {
      return res.status(404).json({
        error: err,
        message: "Movie not found",
      });
    }
    data.name = body.name;
    data.time = body.time;
    data.rating = body.rating;
    data
      ?.save()
      .then(() =>
        res.status(200).json({
          success: true,
          id: data.id,
          message: "Movie updated",
        })
      )
      .catch((error) =>
        res.status(404).json({
          error: error,
          message,
        })
      );
  });

  return findMovie;
};

export { createMovie, getMovie, getMovies, upDateMovie };
