import {prepareMovies, prepareReviews} from "./movies.js"

const movieContainer = document.querySelector(".moviesHere")
const reviewContainer = document.querySelector(".reviewsHere")
movieContainer.innerHTML = prepareMovies()
reviewContainer.innerHTML = prepareReviews()

