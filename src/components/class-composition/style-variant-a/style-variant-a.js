'use strict';

var styles = require('./style-variant-a.css');

angular
  .module('app.components.class-composition.style-variant-a', [])
  .directive('styleVariantA', () => {
    return {
      template: `
        <div class="${styles.root}">
          <p class="${styles.text}">Style Variant A</p>
        </div>
      `
    }
  });
