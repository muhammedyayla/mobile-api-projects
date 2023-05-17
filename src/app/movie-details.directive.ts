import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovieDetails]'
})
export class MovieDetailsDirective {

  @Input('appMovieDetails') movie: any;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');
    movieDetails.innerHTML = `
      <h2>${this.movie.title}</h2>
      <img src="https://image.tmdb.org/t/p/w500${this.movie.poster_path}">
      <p>${this.movie.overview}</p>
    `;
    this.el.nativeElement.appendChild(movieDetails);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const movieDetails = this.el.nativeElement.querySelector('.movie-details');
    if (movieDetails) {
      this.el.nativeElement.removeChild(movieDetails);
    }
  }

}
