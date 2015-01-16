'use strict';

var mongoose = require('mongoose'),
    Message = mongoose.model('Message');

/**
 * Get messages
 */
exports.getAllMessages = function(req, res) {
  return Message.find(function (err, message) {
    if (!err) {
      return res.json(message);
    } else {
      return res.send(err);
    }
  });
};

exports.createMessages = function(req, res) {
	var msg = new Message();
		msg.message = req.body.message;
		msg.timer = req.body.timer;

	return msg.save(function(err, message) {
		if (err)
			res.send(err);

		res.json({ status: "ok", id: message._id, timer: message.timer});
	});
};

exports.getOneMessage = function(req, res, next) {
	return Message.find({_id: req.params.message_id}, null, {limit: 1}, function(err, message) {
		if (!err) {
	      return res.json(message);
	    } else {
	      return res.json({error: err});
	    }
	});
};

exports.deleteMessage = function(req, res) {
	return Message.findByIdAndRemove(req.params.message_id, function(err, message) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted' });
	});
};
