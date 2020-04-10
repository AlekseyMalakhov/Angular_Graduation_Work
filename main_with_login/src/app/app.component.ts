import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { PlacesService } from "./places.service";
//import places from "./places.json";

const places = [
  {
    id: 1,
    name: 'Lorem',
    author: 'Stipe Miocic',
    img: '1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ornare est in porttitor. Nunc congue feugiat risus ut auctor. Maecenas ',
    coords: [
      700,
      500
    ]
  },
  {
    id: 2,
    name: 'Ipsum',
    author: 'Khabib Nurmagamedov',
    img: '2.jpg',
    description: 'imperdiet velit malesuada ex lobortis interdum. Fusce odio lectus, varius eget est non, porta aliquam sapien. Ut porta, eros in porttitor ',
    coords: [
      1000,
      700
    ]
  },
  {
    id: 3,
    name: 'Dolor',
    author: 'Conor McGregor',
    img: '3.jpg',
    description: 'aliquam, lectus quam pharetra elit, nec facilisis tellus magna et ante. Curabitur ornare ac sem nec suscipit. Pellentesque est purus, ',
    coords: [
      1650,
      600
    ]
  },
  {
    id: 4,
    name: 'Vivamus',
    author: 'Mirko Cro Cop',
    img: '4.jpg',
    description: 'elementum a vehicula vel, tempor ac sapien. Integer volutpat eu libero vel congue. Suspendisse semper malesuada rutrum. Aliquam',
    coords: [
      300,
      200
    ]
  },
  {
    id: 5,
    name: 'Aliquam',
    author: 'Fedor Emelianenko',
    img: '5.jpg',
    description: 'tincidunt rutrum lobortis. Proin maximus diam eget quam aliquet, et ullamcorper arcu pharetra. Ut malesuada justo pellentesque nulla ',
    coords: [
      1650,
      300
    ]
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  places = places;
  title = "Your Favorite Places";
  isAuthenticated: boolean;
  sidenav_pos:string;

  constructor(public oktaAuth: OktaAuthService, private router: Router, private data: PlacesService) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.data.currentPosition.subscribe(sidenav_pos => this.sidenav_pos = sidenav_pos);
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
