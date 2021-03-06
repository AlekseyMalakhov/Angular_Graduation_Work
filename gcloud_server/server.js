const express = require('express');
const bodyParser = require("body-parser");
const place = require("./src/places.js");
const app = express();
var cors = require('cors');
var PORT = process.env.PORT || 3000;         // it is a google's demand - port can be changed by App Engine

app.options('*', cors());
app.use(cors());

//parse requests of content-type application/json
app.use(bodyParser.json());

//parse requests of content-type:  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//get all places
app.post("/get_places", findAllPlacesInDataBase);               

function findAllPlacesInDataBase(req, res) {
    place.findAll(callBackWhenFind1);
    //when database returns the result we call the callback function
    //and send the result to the browser
    function callBackWhenFind1(result) {
        //console.log(result);
        res.send(result);
    }
}

//add new place
app.post("/places", addPlaceToDataBase); 

function addPlaceToDataBase(req, res) {
    var newPlace = req.body;
    //I'll write callback in a shorten form
    place.addNewPlace(newPlace, (result) => {res.send(result)});
}

//update a place
app.put("/places/:placeId", updatePlaceById);

function updatePlaceById(req, res) {
    var placeId = req.params.placeId;
    var updatedPlace = req.body;
    place.updatePlaceById(placeId, updatedPlace, (result) => {res.send(result)});
}

//delete a single place by id
app.delete("/places/:placeId", deletePlaceById);

function deletePlaceById(req, res) {
    var placeId = req.params.placeId;
    console.log(placeId);
    place.deletePlaceById(placeId, (result) => {res.send(result)});
}

//only for production build
/*
app.use(express.static(__dirname + "/your-fav-places2"));

app.get('*', function(req, res){
  res.sendFile(__dirname + "/your-fav-places2/index.html");
});
*/
//end for production build

app.listen(PORT, function(){               //стартуем сервер
    console.log('Your fav places server is listening on port ' + PORT);
});

