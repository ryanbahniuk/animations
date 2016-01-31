'use strict';

var fadeOut = require('./animations/fade_out');
var fadeIn = require('./animations/fade_in');
var spin = require('./animations/spin');

var Animations = {
  fadeOut: fadeOut,
  fadeIn: fadeIn,
  spin: spin
};

module.exports = Animations;
