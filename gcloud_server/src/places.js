const sql = require("./db.js");

const place = {};

//another way of writing query string is
//sql.query("SELECT * FROM your_favorite_places.places WHERE id = ?", [placeId], (err, res) =>

//find a single place
place.findById = function(placeId, result) {
  sql.query(`SELECT * FROM places WHERE id = ${placeId}`, (err, res) => {
      if (err) throw err;
      //when database finds the result we call the provided callback function
      result(res);
  });
}

//find all places
/*
place.findAll = function(result) {
  sql.query(`SELECT * FROM places`, (err, res) => {
      if (err) throw err;
      result(res);
  });
}
*/
place.findAll = function(result) {
  // check if information was gatheres from both tables
  var check = {
    places: false,
    coords: false
  };

  sql.query(`SELECT * FROM places`, (err, res) => {
      if (err) throw err;
      check.places = res;
      sendResponse();
      //result(res);
  });

  sql.query(`SELECT * FROM coords`, (err, res) => {
    if (err) throw err;
    check.coords = res;
    sendResponse();
    //result(res);
  });

  function sendResponse() {
    if (check.places && check.coords) {
      result(check);
    }
  }
}

//add a new place
place.addNewPlace = function(place, result) {
  //check if information was added in both tables
  var check = {
    place: false,
    coords: false
  };
  let line_places = 
  `INSERT INTO places (name, author, author_id, img, description) 
  VALUES ("${place.name}", "${place.author}", "${place.author_id}", "${place.img}", "${place.description}")`;

  sql.query(line_places, function (err, res, fields) {
    if (err) throw err;
    check.place = true;
    sendResponse();
  });

  let line_coords =
  `INSERT INTO coords (x, y) 
  VALUES (${place.coords[0]}, ${place.coords[1]})`;

  sql.query(line_coords, function (err, res, fields) {
    if (err) throw err;
    check.coords = true;
    sendResponse();
  });

  function sendResponse() {
    if (check.place && check.coords) {
      result(place.name + " - information added");
    }
  }
}

//delete a place
place.deletePlaceById = function(placeId, result) {
  //check if information was deleted from both tables
  var check = {
    place: false,
    coords: false
  };

  sql.query(`DELETE FROM places WHERE id = ${placeId}`, function (err, res, fields) {
    if (err) throw err;
    if (res.affectedRows !== 0) {
      check.place = "deleted";
    } else {
      check.place = "notFound";
    }
    sendResponse();
  });

  sql.query(`DELETE FROM coords WHERE id = ${placeId}`, function (err, res, fields) {
    if (err) throw err;
    if (res.affectedRows !== 0) {
      check.coords = "deleted";
    } else {
      check.coords = "notFound";
    }
    sendResponse();
  });

  function sendResponse() {
    //console.log(check);
    if (check.place === "deleted" && check.coords === "deleted") {
      result("Id " + placeId + " - information deleted");
      return;
    }
    if (check.place === "notFound" && check.coords === "notFound") {
      result("Id " + placeId + " was not found");
      return;
    }
    if (!check.place && !check.coords) {
      result("Id " + placeId + " - some error occured");
    }
  }
}

//update a place
place.updatePlaceById = function(placeId, place, result) {
  //check if information was updated in both tables
  var check = {
    place: false,
    coords: false
  };

  let line_places = 
  `UPDATE places 
  SET name = "${place.name}", author = "${place.author}", author_id = "${place.author_id}", img = "${place.img}", description = "${place.description}" 
  WHERE id = ${placeId}`;

  sql.query(line_places, function (err, res, fields) {
    if (err) throw err;
    if (res.affectedRows !== 0) {
      check.place = "updated";
    } else {
      check.place = "notFound";
    }
    sendResponse();
  });

  let line_coords = 
  `UPDATE coords 
  SET x = ${place.coords[0]}, y = ${place.coords[1]} 
  WHERE id = ${placeId}`;

  sql.query(line_coords, function (err, res, fields) {
    if (err) throw err;
    if (res.affectedRows !== 0) {
      check.coords = "updated";
    } else {
      check.coords = "notFound";
    }
    sendResponse();
  });

  function sendResponse() {
    if (check.place === "updated" && check.coords === "updated") {
      result("Id " + placeId + " - information updated");
      return;
    }
    if (check.place === "notFound" && check.coords === "notFound") {
      result("Id " + placeId + " was not found");
      return;
    }
    if (!check.place && !check.coords) {
      result("Id " + placeId + " - some error occured");
    }
  }

}

module.exports = place;