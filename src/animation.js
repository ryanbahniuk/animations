'use strict';

function buildTransitioningClassName(animationName, duration) {
  return [
    'transition',
    animationName,
    duration
  ].join('-');
}

function buildCompleteClassName(animationName) {
  return [
    'transition',
    animationName,
    'complete'
  ].join('-');
}

function Animation(element, animationName, duration, callback) {
  this.element = element;
  this.transitionClass = buildTransitioningClassName(animationName, duration);
  this.completeClass = buildCompleteClassName(animationName);
  this.callback = callback;
}

Animation.prototype = {
  trigger: function() {
    if (!this._currentlyTransitioning() && !this._transitionComplete()) {
      this.element.classList.add(this.transitionClass);
      this.element.addEventListener('transitionend', this._endTransition.bind(this));
    }
  },

  _currentlyTransitioning: function() {
    return this.element.classList.contains(this.transitionClass);
  },

  _transitionComplete: function() {
    return this.element.classList.contains(this.completeClass);
  },

  _endTransition: function() {
    this.element.classList.remove(this.transitionClass);
    this.element.classList.add(this.completeClass);
    if (this.callback) {
      this.callback(this.element);
    }
  }
};

module.exports = Animation;
