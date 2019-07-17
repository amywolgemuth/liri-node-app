# liri-node-app
#The Purpose of LIRI

I am making an app called LIRI. It is like iPhone's SIRI; however, LIRI is a _Language_ Interpretation and Recognition Interface (not Speech). LIRI will be a command line node app that takes in parameters and gives you back data.


Here is a link to the video demonstrating my program: https://drive.google.com/file/d/1yD9NJKzvVRbQdN2IGCaol4hm26s7MSOw/view?usp=sharing

This allows a user to search on next upcoming concert information for a band, find information and a link to a song, search information on a movie all in one single app without having to search multiple webpages and a new search for different items. 

The app is organized using 5 functions: a switch statement and the 4 functions for the different processes: concert-this, spotify-this-song, movie-this, and do-what-it-says.

## How to use LIRI

To run the app, open liri.js in your terminal. You must always type "node liri.js" every time you run a search. Add a space and one of four commands then search item for all except do-what-it-says. Examples below:
    *node liri.js concert-this Ed Sheeran
    *node liri.js spotify-this-song Chainsmokers
    *node liri.js movie-this Independence Day
    *node liri.js do-what-it-says

For concert-this, type an artist's name.
For spotify-this-song, add a song title. i.e. node liri.js spotify-this-song "I'm gonna take my horse" 
You can also type this: node liri.js spotify-this-song Im gonna take my horse 
    (note in the command above, I had to leave the apostrophe out of the word "I'm". If you use the apostrophe, then enter your song in double-quotes.)
For movie-this, enter a movie title.
Do-what-it-says: no search item is used since it uses the command and item in random.txt. Update random.txt with one of the commands plus a search item. 

## Technologies used
dotenv
node-spotify-api
axios
fs
node.js
Node Spotify API
Town Artist Events API
OMDB API