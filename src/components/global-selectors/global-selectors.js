'use strict';

var styles = require('./global-selectors.css');

angular
  .module('app.components.global-selectors', [])
  .directive('globalSelectors', () => {
    return {
      restrict: 'E',
      template: `
        <div class="${styles.root}">
          <p class="text">Global Selectors</p>
        </div>
      `
    };
  });
