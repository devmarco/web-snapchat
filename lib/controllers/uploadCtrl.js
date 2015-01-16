'use strict';

var util = require('util'),
    fs = require('fs'),
    formidable = require('formidable');

/**
 * UPLOAD FILES
 */

exports.uploadPage = function(req, res, next) {
    res.render('upload', {title: 'I love files!'});
};

exports.sendUpload = function(req, res, next) {
    var form = new formidable.IncomingForm();

    form.encoding = 'utf-8';
    form.uploadDir = "./uploads";
    form.keepExtensions = true;
    form.multiples = true;

    form.parse(req, function(err, fields, files) {
        console.log(err, files, fields);
        res.end(util.inspect(files));
    });

    return;
};

