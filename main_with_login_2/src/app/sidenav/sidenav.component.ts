import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  sidenav_pos:string;

  @Input() places;

  constructor(private data: PlacesService) { }

  ngOnInit(): void {
    this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
  }

}
