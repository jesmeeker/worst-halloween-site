import { getMovies, getReviews } from "./database.js"

const Movies = getMovies()
const Reviews = getReviews()



//iterate through each movie, conver the image to html
export const prepareMovies = () =>{
    let htmlMovies = ``
    for (const movie of Movies){
        htmlMovies += `
             <div class="testImage">
                 <img id="img" src="${movie.img}" alt="scaryMovieImage">
             </div>
             <div class="movieInfo">
                  ${movie.title}: ${movie.synopsis}
                  ${movie.link} Click here to buy this movie
             </div>`
     }
    return htmlMovies
}

export const prepareReviews = () => {
    let htmlReviews = ``
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

