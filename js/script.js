"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function showMyDB() {
  if ( !personalMovieDB.privat ) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  responses = 0;
  while (responses <= 2) {
    const genre = prompt(`Ваш любимый жанр под номером ${ responses + 1}`);
    responses++;
    personalMovieDB.genres.push(genre);
  }
}

let responses = 0;

while (responses < 2) {
  const movie = prompt('Один из последних просмотренных фильмов?', '');
  const rate = prompt('На сколько оцените его?', '');
  if ( movie.length == 0 || movie.length > 50 || movie == null || rate == null || rate.length == 0){
  continue;
}
responses++;
personalMovieDB.movies[movie] = rate;
}


writeYourGenres();


if (numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов');
}
if (numberOfFilms < 31) {
  alert('Вы классический зритель');
}
if (numberOfFilms > 30) {
  alert('Вы киноман');
}
  else {
  alert('Произошла ошибка');
}


showMyDB();


