import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//add new place to database
function uploadNewPlace(place) {
  var placeJSON = JSON.stringify(place);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
      }
  };
  xhttp.open("POST", "http://localhost:3000/places", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(placeJSON);
}

//update an existing place by id in database
function updatePlace(place) {
  var placeId = place.id;
  var placeJSON = JSON.stringify(place);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
      }
  };
  xhttp.open("PUT", "http://localhost:3000/places/" + placeId, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(placeJSON);
}

var filter_init = {
  author: "All authors",
  min_lat: 0,
  max_lat: 0,
  min_long: 0,
  max_long: 0,
};

var id_init = 52;         //начальный id
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

  private placesList = new BehaviorSubject([]);       //renew list of places after changes or add new place to the MysqlDB
  currentPlaces = this.placesList.asObservable();
  //changePlaces(newList, place_object?, action?) {
  changePlaces(newList, action?, place_object?) {
    this.placesList.next(newList);  //first we update list of places in the local memory
    //console.log(newList);
    //console.log(addedPlace);
    if (place_object) {
      if (action === "add") {
        uploadNewPlace(place_object);          //if we have a new place to add we upload it to the database
      }
      if (action === "update") {
        console.log("place updated");
        updatePlace(place_object);          //if we have an update of existing place - we update this place in database
      }
    }
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
