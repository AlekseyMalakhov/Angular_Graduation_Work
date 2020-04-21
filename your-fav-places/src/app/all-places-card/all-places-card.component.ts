import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-places-card',
  templateUrl: './all-places-card.component.html',
  styleUrls: ['./all-places-card.component.css']
})
export class AllPlacesCardComponent implements OnInit {
  @Input() place;

  constructor() { }

  ngOnInit(): void {
  }

}
