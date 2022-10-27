<<<<<<< HEAD
import { movies, reviews } from './database.js'

const movies = movies();
const reviews = reviews();

//if the movie and review match, then..
for (movie of movies){
    for (review of reviews){
        if (movie.id === review.movieId){
            //pass the review into that movie's html container
            let html = ``
        }
    }
}
=======

>>>>>>> main
