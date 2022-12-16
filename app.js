const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {


    const url = "https://api.openweathermap.org/data/2.5/weather?q=Edmonton&appid=3bb90332185e297a5d39dd672e9f51d8&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data) {  //we have not converted data here, so need to parse it to JS object
           const weatherData = JSON.parse(data);
           console.log(weatherData);
        });
    });

    res.send("Server is up")
});




app.listen(3000, function() {
    console.log("Server is running on port 3000");
});