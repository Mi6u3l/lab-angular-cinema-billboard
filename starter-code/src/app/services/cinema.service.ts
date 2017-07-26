import { Injectable } from '@angular/core';
import moviesList from '../../sample-movies';

@Injectable()
export class CinemaService {
movies: Array < {
    id: number,
    title: string,
    poster: string,
    synopsis: string,
    genres: Array<string>,
    year: number,
    director: string,
    actors: Array<string>
  } > = [];

  constructor() { 
    this.movies = moviesList;
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.filter(movie => {
      return movie.id === id;
    });
  }
}
