'use strict';

var express = require('express'),
    UPLOAD = express.Router(),
    uploadCtrl = require('../controllers/uploadCtrl');

UPLOAD.get('/', uploadCtrl.uploadPage);

UPLOAD.post('/', uploadCtrl.sendUpload);

module.exports = UPLOAD;
