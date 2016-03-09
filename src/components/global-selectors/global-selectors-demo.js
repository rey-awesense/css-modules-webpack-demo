'use strict';

require('../shared/snippet/snippet');
require('./global-selectors');

var js = require('!!raw!./global-selectors.js');
var css = require('!!raw!./global-selectors.css');

angular
  .module('app.components.global-selectors-demo', [
    'app.components.shared.snippet',
    'app.components.global-selectors'
  ])
  .directive('globalSelectorsDemo', () => {
    return {
      restrict: 'E',
      controllerAs: 'demo',
      bindToController: true,
      controller: function () {
        this.files = [
          { name: 'global-selectors.js', source: js },
          { name: 'global-selectors.css', source: css },
        ]
      },
      scope: {},
      template: `
        <snippet files="demo.files">
          <global-selectors></global-selectors>
        </snippet>
      `
    };
  });
