'use strict';

require('../shared/snippet/snippet');
require('./composition-overrides');

var js = require('!!raw!./composition-overrides.js');
var css = require('!!raw!./composition-overrides.css');

angular
  .module('app.components.composition-overrides-demo', [
    'app.components.shared.snippet',
    'app.components.composition-overrides'
  ])
  .directive('compositionOverridesDemo', () => {
    return {
      restrict: 'E',
      controllerAs: 'demo',
      bindToController: true,
      controller: function () {
        this.files = [
          {name: 'composition-overrides.js', source: js},
          {name: 'composition-overrides.css', source: css}
        ];
      },
      scope: {},
      template: `
        <snippet files="demo.files">
          <composition-overrides></composition-overrides>
        </snippet>
      `
    };
  });
