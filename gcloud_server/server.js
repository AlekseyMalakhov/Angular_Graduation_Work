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

/*

app.use(express.static(__dirname + "/your-fav-places"));

app.get('*', function(req, res){
  res.sendFile(__dirname + "/your-fav-places/index.html");
});

*/

//get all places
app.get("/places", findAllPlacesInDataBase);               

function findAllPlacesInDataBase(req, res) {
    place.findAll(callBackWhenFind1);
    //when database returns the result we call the callback function
    //and send the result to the browser
    function callBackWhenFind1(result) {
        console.log(result);
        res.send(result);
    }
}

app.listen(PORT, function(){               //стартуем сервер
    console.log('Your fav places server is listening on port ' + PORT);
});

