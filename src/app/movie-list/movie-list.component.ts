import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(sortBy?: string) {
    let url =
      'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1';
    if (sortBy === 'name') {
      url += '&sort_by=title.asc';
    }
    this.http.get(url).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  searchChanged() {
    const query = this.searchTerm.trim().toLowerCase();
    if (query !== '') {
      const url = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`;
      this.http.get(url).subscribe((data: any) => {
        this.movies = data.results;
        this.sortMovies('name');
      });
    } else {
      this.getMovies();
    }
  }

  sortMovies(order: string) {
    if (order === 'name') {
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
