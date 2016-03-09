'use strict';

require('../shared/snippet/snippet');
require('./style-variant-a/style-variant-a');
require('./style-variant-b/style-variant-b');

var js = require('!!raw!./style-variant-a/style-variant-a.js');
var css = require('!!raw!./style-variant-a/style-variant-a.css');
var layoutCss = require('!!raw!../shared/styles/layout.css');
var typographyCss = require('!!raw!../shared/styles/typography.css');

angular
  .module('app.components.class-composition-demo', [
    'app.components.shared.snippet',
    'app.components.class-composition.style-variant-a',
    'app.components.class-composition.style-variant-b'
  ])
  .directive('classCompositionDemo', () => {
    return {
      restrict: 'E',
      controllerAs: 'demo',
      bindToController: true,
      controller: function () {
        this.files = [
          {name: 'style-variant-a.js', source: js},
          {name: 'style-variant-a.css', source: css},
          {name: 'shared/styles/layout.css', source: layoutCss},
          {name: 'shared/styles/typography.css', source: typographyCss}
        ];
      },
      scope: {},
      template: `
        <snippet files="demo.files">
          <style-variant-a></style-variant-a>
          <style-variant-b></style-variant-b>
        </snippet>
      `
    };
  });
