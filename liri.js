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
var divider = "\n=============================";

function concertIt(bandSearch) {
    if (bandSearch == "") {
        bandSearch = "Jennifer Lopez";
    }
    var URL = "https://rest.bandsintown.com/artists/" + bandSearch + "/events?app_id=codingbootcamp"
    axios.get(URL).then(function (response) {
        var result = response.data[0];
        var bandData = [
            "\nVenue Name: " + result.venue.name,
            "\Venue Location: " + result.venue.city + ", " + result.venue.region,
            "\Concert Date: " + result.datetime
        ].join("\n\n");
        fs.appendFile("log.txt", bandData + divider, function (err) {
            if (err) throw err;
            console.log(bandData);
        });
    })
}

function spotifyIt(musicSearch) {
    //  * If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (musicSearch == "") {
        musicSearch = "The Sign Ace of Base";
    }
    spotify.search({ type: 'track', query: musicSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        else {
            for (i = 0; i < data.tracks.items.length && i < 5; i++) {
                var musicQuery = data.tracks.items[i];
                // console.log("===============================");
                // * Artist(s)
                console.log("Artist: " + musicQuery.artists[0].name +
                    // * The song's name
                    "\nSong Name: " + musicQuery.name +
                    //* A preview link of the song from Spotify
                    "\nLink to Song: " + musicQuery.preview_url +
                    //* The album that the song is from
                    "\nAlbum Name: " + musicQuery.album.name +
                    "\n===============================");
            }
        };
    });
}

function movieIt(movieSearch) {
    var movieChoice;
    if (movieSearch == "") {
        console.log(movieSearch)
        movieChoice = "Jumanji";
    } else {
        movieChoice = movieSearch
    }
    var URL = "http://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&apikey=trilogy";
    axios.get(URL).then(function (response) {
        var result = response.data;
        var movieData = [
            "Movie: " + result.Title,
            "Year: " + result.Year,
            "IMDB Rating: " + result.Ratings[0].Value,
            "Rotten Tomatoes Rating: " + result.Ratings[0].Value,
            "Country: " + result.Country,
            "Language: " + result.Language,
            "Plot: " + result.Plot,
            "Actors: " + result.Actors
        ].join("\n");
        fs.appendFile("log.txt", movieData + divider, function (err) {
            if (err) throw err;
            console.log(movieData);
        });
    })
};


var liri = function (whatToDo, searchThis) {
    switch (whatToDo) {
        case "concert-this":
            concertIt(searchThis);
            break;

        case "spotify-this-song":
            spotifyIt(searchThis);
            break;

        case "movie-this":
            movieIt(searchThis);
            break;

        case "do-what-it-says":
            doWhatItSays();
            break;
    }
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        dataArr[1] = dataArr[1].replace(/["]+/g, '');
        whatToDo = dataArr[0];
        searchThis = dataArr[1];
        liri (whatToDo, searchThis)
    });

}

liri (command, input);