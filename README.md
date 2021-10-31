# We Love Movies Server

Server API for managing we love movies movies, theaters, and review data.

## Links

* [Live App]()
* [App documentation](https://github.com/RandyTG/starter-movie-front-end)

## Technology

### Built With:
* Node.js
   * Express server framework
   * CORS for safer request headers  
* PostgreSQL database
   * Knex.js for query building  
* Testing on Mocha framework using Chai and Supertest

## Installation

1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

The deafult server locations will be `http://localhost:5000`.

## API Documentation

All get requests return JSON response.
All post requests require application/json body, and return JSON response.

### Endpoints for data entries:

**GET Movies:** 
* `GET /api/movies`
    * Returns an array of objects containing all of the movies by default.
    * Adding query parameter `is_showing=(true/false)` will return the movies currently showing in theaters or those that aren't.
    * Adding URL parameter `/:movie_id` will return the movie with the corresponding ID or an error if none is found.
* `GET/api/movies/:movie_id/theaters`
    * Returns the theaters associated to the specific movie.
* `GET/api/movies/:movie_id/reviews`
    * Returns the reviews with their critics associated to the specific movie.

**GET Theaters:** `GET /api/theaters`
* Returns a list of theaters with their respective movies that are currently showing.

### Enpoints for data management:

**PUT Reviews:** `PUT /api/reviews/:review_id`
* Updated the review given review ID.
* JSON response incliding the critics information with updated review is returned

**DELETE Reviews:** `DELETE /api/reviewa/:review_id`
* Deletes corresponding review if it exists
