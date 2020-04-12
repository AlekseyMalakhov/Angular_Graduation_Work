import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() places;
  @Input() user;

  editPlace = false;
  mystyle = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router);
  }

  addPlace() {
    if (this.user) {
      console.log("add place for " + this.user);
      this.editPlace = true;
      this.mystyle = {minWidth: "300px"};
    } else {
      this.router.navigate(["/login"]);
    }    
  }

  cancelEditPlace() {
    this.editPlace = false;
    this.mystyle = {minWidth: ""};
  }

}
