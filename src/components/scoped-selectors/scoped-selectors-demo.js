'use strict';

require('../shared/snippet/snippet');
require('./scoped-selectors');

var js = require('!!raw!./scoped-selectors.js');
var css = require('!!raw!./scoped-selectors.css');

angular
  .module('app.components.scoped-selectors-demo', [
    'app.components.shared.snippet',
    'app.components.scoped-selectors'
  ])
  .directive('scopedSelectorsDemo', () => {
    return {
      restrict: 'E',
      controllerAs: 'demo',
      bindToController: true,
      controller: function () {
        this.files = [
          { name: 'scoped-selectors.js', source: js },
          { name: 'scoped-selectors.css', source: css }
        ];
      },
      scope: {},
      template: `
        <snippet files="demo.files">
          <scoped-selectors></scoped-selectors>
        </snippet>
      `
    };
  });
