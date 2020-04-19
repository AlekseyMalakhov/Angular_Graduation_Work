import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.css']
})
export class PlacePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
