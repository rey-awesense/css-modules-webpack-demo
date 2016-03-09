'use strict';

var styles = require('./style-variant-b.css');

angular
  .module('app.components.class-composition.style-variant-b', [])
  .directive('styleVariantB', () => {
    return {
      template: `
        <div class="${styles.root}">
          <p class="${styles.text}">Style Variant B</p>
        </div>
      `
    }
  });
