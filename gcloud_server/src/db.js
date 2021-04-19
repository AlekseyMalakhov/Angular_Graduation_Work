const mysql = require("mysql");

//create a connection to the database

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "741520",
    database: "your_favorite_places"
});

/*
const connection = mysql.createConnection({
    host: "freedb.tech",
    user: "freedb_megauser",
    password: "741520hexel",
    database: "freedb_yfplaces"
});
*/

connection.connect(error => {
    if (error) throw error;
    console.log("Connected to database");    
});

module.exports = connection;