function renderMovies() {
  const moviesWrapper = document.querySelector('.movie__wrapper');
  const movies = getMovies();
   
  const moviesHtml = movies.map((movie) => {
  return `<div class="movie__wrapper">
            <div class="movie__data">
              <figure>
              <img src="${movie.url}" class="movie__poster" alt=""></figure>
              <h3 class="movie__name">${movie.title}</h3>
              <p class="movie__year">${movie.year}</p>
            </div>
          </div>`;
  }).join("");

moviesWrapper.innerHTML = moviesHtml
console.log(moviesHtml);
}

setTimeout(() => {
  renderMovies();
});

/* DATA */ 
function getMovies() {
  return [
    {
      "Title": "Teen Titans GO! To the Movies",
      "Year": "2018",
      "imdbID": "tt7424200",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTU5YjQxNzAtNzkxNC00MGVjLWFhMjgtMjg2ZDUyM2Q5YzdhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Life and Movies of Ersan Kuneri",
      "Year": "2022–",
      "imdbID": "tt13238304",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjRkMjQ2Y2MtMTQ5NC00NjljLTg0M2EtNTllZGRhYjc1ZTA2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Home Movies",
      "Year": "1999–2004",
      "imdbID": "tt0197159",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzIwZDVkZmYtNjJhOC00YTJjLWFlYzMtMDhhNjdhNDEwYTE2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Movies That Made Us",
      "Year": "2019–2021",
      "imdbID": "tt10681222",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzVhNTdmNGMtNzQ0My00MmE1LTllNTEtOGEwNmFiNzY0NDFlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The New Scooby-Doo Movies",
      "Year": "1972–1973",
      "imdbID": "tt0068112",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmQwMzY4MDYtMGY1Ny00YTQzLWExZjQtNGJhNWJiMTFkYTM0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Unforgettable Director of Love Movies",
      "Year": "1990",
      "imdbID": "tt0263074",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWZlODEzYjgtZTJlNS00YmEyLTlkZDYtOWUwYjQ5ZmZhYzliXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "A Personal Journey with Martin Scorsese Through American Movies",
      "Year": "1995",
      "imdbID": "tt0112120",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGRkMWFkZjgtYzc2My00MjljLTkwNTEtMGZhOTUyM2I3OGMxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "I Like Movies",
      "Year": "2022",
      "imdbID": "tt14913282",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjZhMmI5OTgtODVjYi00N2NlLWE4YWQtMmQwNzdkZGU2Mzc3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Midnight Movies: From the Margin to the Mainstream",
      "Year": "2005",
      "imdbID": "tt0457414",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzNTc4MzQyMF5BMl5BanBnXkFtZTcwODM1OTc3MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Movies",
      "Year": "2019",
      "imdbID": "tt10468676",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGMzZjdiNjEtMTMwMS00MTVkLTk0NWMtOGFjODY1MWRkNmVmXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "totalResults"; "999",
  "Response"; "True"
}