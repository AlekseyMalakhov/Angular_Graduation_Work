import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {
  @Input() user: string;
  @Input() userId: string;

  new_place = {
    id: 1,
    name: "",
    author: "",
    author_id: "stipe_miocic",
    img: '1.jpg',
    description: "",
    coords: [0, 0],
  };  

  listOfImg = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cancelEditPlace() {
    /*
    this.editPlace = false;
    this.mystyle = {minWidth: ""};
    */
  }

  savePlace() {
    this.new_place.author = this.user;
    this.new_place.author_id = this.userId;
    console.log(this.new_place);
    console.log(this.user);
  }

}
