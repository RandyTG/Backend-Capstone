const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const configuration = {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
};
const addMovies = reduceProperties("theater_id", configuration);

function list() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "m.*", "mt.*")
    .then(addMovies);
}

module.exports = {
  list,
};
