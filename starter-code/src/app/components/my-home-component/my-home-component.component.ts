import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<any>;
  constructor(private theCinema: CinemaService) { }

  ngOnInit() {
    this.movies = this.getMovies();
  }

  getMovies() {
   return this.theCinema.getMovies();
  }
}
