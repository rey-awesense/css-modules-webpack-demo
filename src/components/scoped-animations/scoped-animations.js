'use strict';

var styles = require('./scoped-animations.css');

angular
  .module('app.components.scoped-animations', [])
  .directive('scopedAnimations', () => {
    return {
      restrict: 'E',
      template: `
        <div class="${styles.root}">
          <div class="${styles.ball}"></div>
        </div>
      `
    };
  });
