require("dotenv").config();
var keys = require("./keys.js");

//Spotify API Set-up
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");

//Globally declared variables
var whatToDo = process.argv[2];
var searchThis = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------";

function liri() {
    switch (whatToDo) {
        case "concert-this":
            break;

        case "spotify-this-song":
            break;

        case "movie-this":
            break;

        case "do-what-it-says":
            break;

    }
}
liri();