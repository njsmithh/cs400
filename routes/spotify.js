const spotifyConfig = require('../config/spotify')

var express = require('express');
var router = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: spotifyConfig.CLIENT_ID,
    clientSecret: spotifyConfig.CLIENT_SECRET,
    redirectUri: spotifyConfig.CALLBACK_URI,
});


/* GET tracks page. */


getTracks();

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
                        res.render('spotify', { title: 'Express', song1: names[0], song2: names[1], song3: names[2], song4: names[3], song5: names[4], song6: names[5], song7: names[6], song8: names[7], song9: names[8], song10: names[9] });
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