require("dotenv").config();
var keys = require("./keys.js");

//Spotify API Set-up
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");

//Globally declared variables
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------";

function concertIt(bandQuery){
    var URL = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp"
            axios.get(URL).then(function (response) {
                var result = response.data[0];

                var bandData = [
                    "Name: " + result.venue.name,
                    "Location: " + result.venue.city + ", " + result.venue.region,
                    "Date: " + result.datetime
                ].join("\n\n");

                fs.appendFile("log.txt", bandData + divider, function (err) {
                    if (err) throw err;
                    console.log(bandData);
                });
            })
}

var liri = function (whatToDo, searchThis) {
    switch (whatToDo) {
        case "concert-this":
            concertIt(searchThis);
            break;

        case "spotify-this-song":
            break;

        case "movie-this":
            break;

        case "do-what-it-says":
            break;

    }
}
liri (command, input);