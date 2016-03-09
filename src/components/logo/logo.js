'use strict';

var styles = require('./logo.css');

angular
  .module('app.components.logo', [])
  .directive('logo', () => {
    return {
      restrict: 'E',
      template: `
        <div class="${styles.logo}">CSS Modules Demo</div>
      `,
      link: () => {}
    };
  });
