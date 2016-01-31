'use-strict';

var Animation = require('../animation');

function FadeOut(element, duration, callback) {
  var fadeOut = new Animation(element, 'fade-out', duration, callback);
  fadeOut.trigger();
};

module.exports = FadeOut;
