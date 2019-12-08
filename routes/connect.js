var express = require('express');
var spotifyCodes = require('../config/spotify');
var router = express.Router();

var clientID = spotifyCodes.CLIENT_ID;
var clientSecret = spotifyCodes.CLIENT_SECRET;
var redirectURI = spotifyCodes.CALLBACK_URI;
var accessToken = spotifyCodes.ACCESS_TOKEN;

var stateKey = 'spotify_auth_state';

/* GET connect page. */
router.get('/', function(req, res, next) {
    res.render('connect', { title: 'Connect to Spotify' , token: accessToken},);
});

module.exports = router;
