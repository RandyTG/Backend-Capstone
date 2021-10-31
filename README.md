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

## API Documentation

All get requests return JSON response.
All post requests require application/json body, and return JSON response.

### Endpoints for data entries:

**Get Movies** 
* `GET /api/movies`
    * returns an array of objects containing all of the movies by default.
    * Adding query parameter `is_showing=(true/false)` will return the movies currently showing in theaters or those that aren't.
    * Adding URL parameter `/:movie_id` will return the movie with the corresponding ID or an error if none is found.
* `GET/api/movies/:movie_id/theaters`
    * Returns the theaters associated to the specific movie.
* `GET/api/movies/:movie_id/reviews`
    * Returns the reviews associated to the specific movie.

