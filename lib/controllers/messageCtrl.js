'use strict';

var mongoose = require('mongoose'),
    Message = mongoose.model('Message');

/**
 * Get messages
 */

exports.filterParam = function(req, res, next) {
  next();
};

exports.getOneMessage = function(req, res, next) {
  return Message.find({_id: req.params.message_id}, null, {limit: 1}, function(err, messages) {
    if (err || messages[0] == null) {
      return res.render(404)
    } else {
        //Render page
        res.render('message', {
            message: messages[0].message,
            timer: messages[0].timer,
            id: messages[0].id
        });
    }
  });
};

