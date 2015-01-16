'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Message Schema
 */
var MessageSchema = new Schema({
	message: String,
	timer: Number,
	views: {
		page: String,
		count: Number
	}
});

/**
 * Validations
 */
// MessageSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Message', MessageSchema);
