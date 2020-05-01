import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import places from "./places";
//import places_json from "./places_json.json";


/*
var places;
loadPlaces();

function loadPlaces() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            places = JSON.parse(this.responseText);
            changePlaces(places);
        }
    };
    xhttp.open("GET", "http://localhost:8080/places.json", true);
    xhttp.send();
}

*/

//console.log(places_json);
/*

//переводим places в сплошной массив
function createArr(places) {
  var arr_places = [];
  var id;
  for (id in places) {
    var place_list = places[id];
    for (var i = 0; i < place_list.length; i++) {
      arr_places.push(place_list[i]);
    }
  }
  return arr_places;
}

var arr_places = createArr(places);
*/

var filter_init = {
  author: "All authors",
  min_lat: 0,
  max_lat: 0,
  min_long: 0,
  max_long: 0,
};

var id_init = 51;         //начальный id
/*
interface Placeable { 
  id: number; 
  name: string; 
  author: string; 
  author_id: string; 
  img: string; 
  description: string; 
  coords: number[]; 
};
*/

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private user = new BehaviorSubject({});          //раздаем имя пользователя
  currentUser= this.user.asObservable();
  changeUser(user_obj: object) {
    this.user.next(user_obj);
  }

  private sidenavPos = new BehaviorSubject("show");       //скрываем/показываем сайднав
  currentPosition = this.sidenavPos.asObservable();
  changeSidenavPos(position: string) {
    this.sidenavPos.next(position);
  }

  private sidenavButton = new BehaviorSubject("show_button");          //переключаем кнопку кнопку сайднав/назад
  currentSidenavButton = this.sidenavButton.asObservable();
  changeSidenavButton(display: string) {
    this.sidenavButton.next(display);
  }

  private selectedPlace = new BehaviorSubject({});          //объект выбранного места
  currentSelected = this.selectedPlace.asObservable();
  changeSelectedPlace(place: object) {
    this.selectedPlace.next(place);
  }

  private placesList = new BehaviorSubject([]);       //список мест
  currentPlaces = this.placesList.asObservable();
  changePlaces(newPlaces) {
    this.placesList.next(newPlaces);
    console.log(newPlaces);
  }

  private searchString = new BehaviorSubject("");          //переключаем кнопку кнопку сайднав/назад
  currentSearchString = this.searchString.asObservable();
  changeSearchString(search: string) {
    this.searchString.next(search);
  }

  private filterDisplay = new BehaviorSubject(false);          //переключаем отображение фильтра
  currentFilterDisplay = this.filterDisplay.asObservable();
  changeFilterDisplay(filter_display: boolean) {
    this.filterDisplay.next(filter_display);
  }

  private filter = new BehaviorSubject(filter_init);         //раздаем настройки фильтра
  currentFilter = this.filter.asObservable();
  changeFilter(filter) {
    this.filter.next(filter);
  }

  private filteredPlaces = new BehaviorSubject([]);        //раздаем отфильтрованный список мест
  currentFilteredPlaces = this.filteredPlaces.asObservable();
  changeFilteredPlaces(filtered_places) {
    this.filteredPlaces.next(filtered_places);
  }

  private sortedPlaces = new BehaviorSubject([]);        //раздаем отфильтрованный и отсортированный список мест
  currentSortedPlaces = this.sortedPlaces.asObservable();
  changeSortedPlaces(sorted_places) {
    this.sortedPlaces.next(sorted_places);
  }

  private userPage = new BehaviorSubject(false);             //проверяем если мы на странице пользователя (тогда показываем только его места)
  currentUserPage = this.userPage.asObservable();
  changeUserPage(user_page: boolean) {
    this.userPage.next(user_page);
  }

  private editPlace = new BehaviorSubject(false);             //режим редактирования места
  currentEditPlace = this.editPlace.asObservable();
  changeEditPlace(edit_place: boolean) {
    this.editPlace.next(edit_place);
  }

  private newPlaceCoords = new BehaviorSubject([700, 300]);             //раздаем координаты добавленного места
  currentNewPlaceCoords = this.newPlaceCoords.asObservable();
  changeNewPlaceCoords(coords: number[]) {
    this.newPlaceCoords.next(coords);
  }

  private newPlaceId = new BehaviorSubject(id_init);             //раздаем id добавленного места
  currentNewPlaceId = this.newPlaceId.asObservable();
  changeNewPlaceId(id: number) {
    this.newPlaceId.next(id);
  }

  private placeSaved = new BehaviorSubject(false);             //раздаем событие что место сохранено
  currentPlaceSaved = this.placeSaved.asObservable();
  changePlaceSaved(pl: boolean) {
    this.placeSaved.next(pl);
    console.log(pl);
  }

  private placeToEdit = new BehaviorSubject({});             //раздаем редактируемое место
  currentPlaceToEdit = this.placeToEdit.asObservable();
  changePlaceToEdit(pl) {
    this.placeToEdit.next(pl);
  }

}
