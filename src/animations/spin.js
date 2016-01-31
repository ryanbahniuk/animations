'use-strict';

var Animation = require('../animation');

function Spin(element, duration, callback) {
  var spin = new Animation(element, 'spin', duration, callback);
  spin.trigger();
};

module.exports = Spin;
