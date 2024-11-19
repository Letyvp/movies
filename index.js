
async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=21391f58&s=movies");
    const movieData = await movies.json();
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = movieData.map((movie) => moviesHTML(movie)).join("");
}

main();

function showMovieList(movie) {
    localStorage.setItem("movie",movie);
    window.location.href = `${window.location.origin}/movie.html`;
}


