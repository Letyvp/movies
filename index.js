
async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=21391f58");
    const movieData = await movies.json();
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = movieData.map((movies) => moviesHTML(movie)).join("");
}

main();

function movieList(movie) {
    localStorage.setItem("movie",movie);
    window.location.href = `${window.location.origin}/movie.html`;
}



function moviesHTML(movie) {
    return `<div class="movie__wrapper" onclick="showMovieList(${movie})>
                        <div class="movie__data">
                            <img src="" alt="">
                            <h3>${movie.name}</h3>
                            <p class="price">${movie.price}</p>
                        </div>
                    </div>`
}


