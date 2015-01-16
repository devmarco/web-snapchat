'use strict';

var mongoose = require('mongoose'),
     Message = mongoose.model('Message');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Message.find({}).remove(function() {
  Message.create({
    message : 'JSNice is a very impressive JavaScript deobfuscator. It even renames variables and parameters quite accurately. http://jsnice.org/',
    timer: 100
  }, {
    message : 'Did you know...Github uses the custom elements polyfill? All those little timestamps are web components.',
    timer: 100
  }, {
    message : 'Join the #IE Engineering and Dev Relations teams on May 29 from 10AM-Noon PDT for our next @IEDevChat tweet chat: use #AskIE for questions',
    timer: 100
  }, {
    message : 'SpeedCurve now has SpeedIndex, how many ms are above your curve? @paul_irish aims for < 1000. http://speedcurve.com/demo/',
    timer: 100
  }, {
    message : 'The Illusion of Motion. A story about the perception of vision, frame and refresh rate, motion blur, and TV displays. http://paulbakaus.com/tutorials/performance/the-illusion-of-motion/',
    timer: 100
  }, function() {
      console.log('finished populating Message');
    }
  );
});
