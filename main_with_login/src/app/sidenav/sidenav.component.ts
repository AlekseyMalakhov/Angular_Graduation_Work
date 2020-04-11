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

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router);
  }

  addPlace() {
    if (this.user) {
      console.log("add place for " + this.user);
    } else {
      this.router.navigate(["/login"]);
    }    
  }

}
