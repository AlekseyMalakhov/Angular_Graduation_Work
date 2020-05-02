const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
var PORT = process.env.PORT || 4200;         // it is a google's demand - port can be changed by App Engine

app.use(cors());                                //разрешаем запросы из любого источника
app.use(express.static(path.join(__dirname, "dist/your-fav-places")));

/*
app.get('/places.json', function(req, res){            // когда браузер подкючается к /places.json он получает файл places.json 
    res.sendFile(__dirname + "/places.json");
});
*/

app.get('*', function(req, res){
  res.sendFile(__dirname + "/dist/your-fav-places/index.html");
});
  
app.listen(PORT, function(){               //стартуем сервер
    console.log('Your fav places server is listening on port ' + PORT);
});

