'use strict';

require('../shared/snippet/snippet');
require('./scoped-animations');

var js = require('!!raw!./scoped-animations.js');
var css = require('!!raw!./scoped-animations.css');
var animationsCss = require('!!raw!../shared/styles/animations.css');

angular
  .module('app.components.scoped-animations-demo', [
    'app.components.shared.snippet',
    'app.components.scoped-animations'
  ])
  .directive('scopedAnimationsDemo', () => {
    return {
      restrict: 'E',
      controllerAs: 'demo',
      bindToController: true,
      controller: function () {
        this.files = [
          { name: 'scoped-animations.js', source: js },
          { name: 'scoped-animations.css', source: css },
          { name: '/shared/styles/animations.css', source: animationsCss },
        ];
      },
      scope: {},
      template: `
        <snippet files="demo.files">
          <scoped-animations></scoped-animations>
        </snippet>
      `
    };
  });
