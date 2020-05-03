const express = require('express');
//const path = require('path');
const fs = require('fs');
var cors = require('cors');
const app = express();
var PORT = process.env.PORT || 8080;         // it is a google's demand - port can be changed by App Engine

app.options('*', cors());
app.use(cors());                                //разрешаем запросы из любого источника
app.use(express.json());

/*
app.use(express.static(path.join(__dirname, "dist/your-fav-places")));
*/


app.get('/places.json', function(req, res){            // когда браузер подкючается к /places.json он получает файл places.json 
    res.sendFile(__dirname + "/places.json");
});

app.post('/places.json', function (req, res) {
  res.send('Got a POST request');
  var data = JSON.stringify(req.body);
  fs.writeFile("places.json", data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
})

/*
app.get('*', function(req, res){
  res.sendFile(__dirname + "/dist/your-fav-places/index.html");
});
*/
  
app.listen(PORT, function(){               //стартуем сервер
    console.log('Your fav places server is listening on port ' + PORT);
});

