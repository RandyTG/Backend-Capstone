const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const isShowing = req.query.is_showing;

  res.json({ data: await service.list(isShowing) });
}

async function read(req, res) {
  const { movieId } = req.params;

  const response = await service.read(movieId);
  if (!response) {
    res.status(404).json({ error: "Movie cannot be found." });
  }
  res.json({ data: response });
}

async function readTheaters(req, res) {
  const { movieId } = req.params;
  const response = await service.readTheaters(movieId);
  res.json({ data: response });
}

async function readReviews(req, res) {
  const { movieId } = req.params;
  res.json({ data: await service.readReviews(movieId) });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: asyncErrorBoundary(read),
  readTheaters: asyncErrorBoundary(readTheaters),
  readReviews: asyncErrorBoundary(readReviews),
};
