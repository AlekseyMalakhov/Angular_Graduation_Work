import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() user;
  @Output("logout") 
  log_out: EventEmitter<any> = new EventEmitter();
  sidenav_pos:string;
  menu_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

  constructor(private data: PlacesService) { 
  }

  ngOnInit() {
    this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
  }

  toggleSidenav(): void {
    if (this.sidenav_pos === "show") {
      this.data.changeMessage("hide");
      return;
    }
    if (this.sidenav_pos === "hide") {
      this.data.changeMessage("show");
      return;
    }
  }

  logout() {
    this.log_out.emit();
  }

  home() {
    console.log(window.location.href);
    window.location.href = '';
  }

}
