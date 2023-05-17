import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent  implements OnInit {

constructor(
  private activatedRoute: ActivatedRoute,
  private router: Router
) {}


  ngOnInit() {}

}
