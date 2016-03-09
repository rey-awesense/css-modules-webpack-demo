'use strict';

var styles = require('./scoped-selectors.css');

angular
  .module('app.components.scoped-selectors', [])
  .directive('scopedSelectors', () => {
    return {
      restrict: 'E',
      template: `
        <div class="${styles.root}">
          <p class="${styles.text}">Scoped Selectors</p>
        </div>
      `
    };
  });
