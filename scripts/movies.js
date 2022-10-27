import { movies, reviews } from './database.js'

const Movies = movies()
const Reviews = reviews()

const movieContainer = document.querySelector(".moviesHere")
const reviewContainer = document.querySelector(".reviewsHere")

//iterate through each movie, conver the image to html
const prepareMovies = () =>{
    let htmlMovies = ''
    for (const movie of Movies){
        htmlMovies += `
         <article>
             <div class="testImage">
                 <img scr="${movie.img}" alt="Boo!" width="500" height="600"/>
             </div>
             <div class="movieInfo">
                  ${movie.title}: ${movie.synopsis}
             </div>
         </article>`
     }
    return htmlMovies
}

const prepareReviews = () => {
    let htmlReviews = ''
    for (const movie of Movies){
        for (const review of Reviews){
            if (movie.id === review.movieId){
                htmlReviews += `
                <article>
                    <div class ="testReview">
                        <div class="user">
                            ${review.user}
                        </div>
                        <div class"movieTitle">
                            ${movie.title}
                        </div>
                        <div class "textAndRating">
                            ${review.text} Rating: ${review.rating}
                        </div>
                    </div>
                </article>`
            }
           }
    }
    return htmlReviews
}

movieContainer.innerHTML = prepareMovies
reviewContainer.innerHTML = prepareReviews