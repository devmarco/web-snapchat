'use strict';

var express = require('express'),
    MESSAGE = express.Router(),
    msgCtrl = require('../controllers/messageCtrl');
/**
 * MESSAGE routes
 */

//TRACK VIEWS
MESSAGE.param('message_id', msgCtrl.filterParam);

MESSAGE.get('/:message_id', msgCtrl.getOneMessage);

// All undefined api routes should return a 404
MESSAGE.get('/*', function(req, res) {
      res.json({error: "This route not exist, please consult the api docs"});
    });

module.exports = MESSAGE;

