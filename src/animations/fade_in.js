'use-strict';

var Animation = require('../animation');

function FadeIn(element, duration, callback) {
  var fadeIn = new Animation(element, 'fade-in', duration, callback);
  fadeIn.trigger();
};

module.exports = FadeIn;
