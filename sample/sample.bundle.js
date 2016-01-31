(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var animations = require('../src/main');

window.animations = animations;

},{"../src/main":5}],2:[function(require,module,exports){
'use strict';

function buildTransitioningClassName(animationName, duration) {
  return ['transition', animationName, duration].join('-');
}

function buildCompleteClassName(animationName) {
  return ['transition', animationName, 'complete'].join('-');
}

function Animation(element, animationName, duration, callback) {
  this.element = element;
  this.transitionClass = buildTransitioningClassName(animationName, duration);
  this.completeClass = buildCompleteClassName(animationName);
  this.callback = callback;
}

Animation.prototype = {
  trigger: function () {
    if (!this._currentlyTransitioning() && !this._transitionComplete()) {
      this.element.classList.add(this.transitionClass);
      this.element.addEventListener('transitionend', this._endTransition.bind(this));
    }
  },

  _currentlyTransitioning: function () {
    return this.element.classList.contains(this.transitionClass);
  },

  _transitionComplete: function () {
    return this.element.classList.contains(this.completeClass);
  },

  _endTransition: function () {
    this.element.classList.remove(this.transitionClass);
    this.element.classList.add(this.completeClass);
    if (this.callback) {
      this.callback(this.element);
    }
  }
};

module.exports = Animation;

},{}],3:[function(require,module,exports){
'use-strict';

var Animation = require('../animation');

function FadeIn(element, duration, callback) {
  var fadeIn = new Animation(element, 'fade-in', duration, callback);
  fadeIn.trigger();
};

module.exports = FadeIn;

},{"../animation":2}],4:[function(require,module,exports){
'use-strict';

var Animation = require('../animation');

function FadeOut(element, duration, callback) {
  var fadeOut = new Animation(element, 'fade-out', duration, callback);
  fadeOut.trigger();
};

module.exports = FadeOut;

},{"../animation":2}],5:[function(require,module,exports){
'use strict';

var fadeOut = require('./animations/fade_out');
var fadeIn = require('./animations/fade_in');

var Animations = {
  fadeOut: fadeOut,
  fadeIn: fadeIn
};

module.exports = Animations;

},{"./animations/fade_in":3,"./animations/fade_out":4}]},{},[1]);
