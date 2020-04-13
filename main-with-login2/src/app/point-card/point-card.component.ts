import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point-card',
  templateUrl: './point-card.component.html',
  styleUrls: ['./point-card.component.css']
})
export class PointCardComponent implements OnInit {
  @Input() place;

  constructor() { }

  ngOnInit(): void {
  }

}
