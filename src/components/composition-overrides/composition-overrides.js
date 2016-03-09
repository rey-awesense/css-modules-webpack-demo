'use strict';

var styles = require('./composition-overrides.css');

angular
  .module('app.components.composition-overrides', [])
  .directive('compositionOverrides', () => {
    return {
      restrict: 'E',
      template: `
        <div class="${styles.root}">
          <p class="${styles.text}">Composition Overrides</p>
        </div>
      `
    };
  });
