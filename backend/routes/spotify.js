const spotifyConfig = require('../config/spotify')
const mongoose = require('mongoose');

var express = require('express');
var router = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: spotifyConfig.CLIENT_ID,
    clientSecret: spotifyConfig.CLIENT_SECRET,
    redirectUri: spotifyConfig.CALLBACK_URI,
});


mongoose.connect('mongodb://localhost:27017/lookups', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

var lookupSchema = new mongoose.Schema({
    time: Date,
    song1: String,
    song2: String,
    song3: String,
    song4: String,
    song5: String,
    song6: String,
    song7: String,
    song8: String,
    song9: String,
    song10: String,
});

var LookupHistory = mongoose.model('LookupHistory', lookupSchema);




// --------------------------------------------------------------------------------------------------------------------------------
/* GET tracks page. */


// LookupHistory.find({ }, function (err, results),  {
//     if (err) return console.error(err);
//     console.log(results);
// })
//
// Person.find({
//     occupation: /host/,
//     'name.last': 'Ghost',
//     age: { $gt: 17, $lt: 66 },
//     likes: { $in: ['vaporizing', 'talking'] }
// }).limit(10).sort({ occupation: -1 }).select({ name: 1, occupation: 1 }).exec(callback);

render();

function render() {
    LookupHistory.find().sort({ time: -1 }).limit(1).select({time: 1}).find(function (err, results) {
        if (err) return console.error(err);
        var myDate = results[0]["time"];
        var ONE_HOUR = 60 * 60 * 1000;
        var isWithinHour = ((new Date) - myDate) < ONE_HOUR;

        if (isWithinHour) {
            getCache();
        } else {
            getTracks();
        }
    });
}

function getCache() {
    LookupHistory.find().sort({ time: -1 }).limit(1).find(function (err, results) {
        if (err) return console.error(err);
        var cache = results[0];

        router.get('/', function(req, res, next) {
            let ret = {
                song1: cache["song1"],
                song2: cache["song2"],
                song3: cache["song3"],
                song4: cache["song4"],
                song5: cache["song5"],
                song6: cache["song6"],
                song7: cache["song7"],
                song8: cache["song8"],
                song9: cache["song9"],
                song10: cache["song10"],
                grabbedFrom: "the cache. Result is accurate for the last hour" }

            res.send(ret);
        });
    });
}


function getTracks() {
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);

            spotifyApi.getArtistTopTracks('06HL4z0CvFAxyc27GXpf02', 'US')
                .then(function (data) {
                    // console.log(data.body);
                    results = data.body.tracks;
                    // console.log(results[9]['name']);
                    var names = [];
                    for (var x in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                        names.push(results[x]['name'])
                    }

                    router.get('/', function(req, res, next) {
                        let ret = { song1: names[0], song2: names[1], song3: names[2], song4: names[3], song5: names[4], song6: names[5], song7: names[6], song8: names[7], song9: names[8], song10: names[9], grabbedFrom: "the Spotify Web API" }
                        res.send(ret);
                    });


                    var resultStore = new LookupHistory({
                        time: Date(),
                        song1: names[0],
                        song2: names[1],
                        song3: names[2],
                        song4: names[3],
                        song5: names[4],
                        song6: names[5],
                        song7: names[6],
                        song8: names[7],
                        song9: names[8],
                        song10: names[9],
                    });

                    resultStore.save(function (err, resultStore) {
                        if (err) return console.error(err);
                        console.log("Saved!")
                    });

                }, function (err) {
                    console.log('Something went wrong!', err);
                });
        },
        function (err) {
            console.log('Something went wrong when retrieving an access token', err);
        }
    );
}

module.exports = router;
