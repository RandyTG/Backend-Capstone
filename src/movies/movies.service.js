const knex = require("../db/connection");
const addCritic = require("../utils/add-critic");

function list(showing) {
  if (showing) {
    return knex("movies_theaters as mt")
      .join("movies as m", "mt.movie_id", "m.movie_id")
      .select("m.*")
      .where({ "mt.is_showing": true })
      .groupBy("m.movie_id");
  } else {
    return knex("movies").select("*");
  }
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function readTheaters(movieId) {
  return knex("movies_theaters as mt")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("t.*", "mt.*")
    .where({ movie_id: movieId });
}

function readReviews(movieId) {
  return knex("reviews as r")
    .join("movies as m", "r.movie_id", "m.movie_id")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select("r.*", "c.*")
    .where({ "r.movie_id": movieId })
    .then(addCritic);
}

module.exports = {
  list,
  read,
  readTheaters,
  readReviews,
};
