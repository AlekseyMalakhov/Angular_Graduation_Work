const express = require('express');
const app = express();
var cors = require('cors');
var PORT = process.env.PORT || 4200;         // it is a google's demand - port can be changed by App Engine

app.options('*', cors());
app.use(cors()); 

app.use(express.static(__dirname + "/your-fav-places"));

app.get('*', function(req, res){
  res.sendFile(__dirname + "/your-fav-places/index.html");
});

app.listen(PORT, function(){               //стартуем сервер
    console.log('Your fav places server is listening on port ' + PORT);
});

