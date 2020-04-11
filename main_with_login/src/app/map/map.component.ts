import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  //Object = Object;
  @Input() places;
  @Input() user;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
