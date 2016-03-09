'use strict';

require('angular');
require('./logo/logo');
require('./scoped-selectors/scoped-selectors-demo');
require('./global-selectors/global-selectors-demo');
require('./class-composition/class-composition-demo');
require('./composition-overrides/composition-overrides-demo');
require('./scoped-animations/scoped-animations-demo');

var typo = require('./shared/styles/typography.css');
var styles = require('./app.css');

class AppController {
  constructor() {}
}

angular
  .module('app', [
    'app.components.logo',
    'app.components.scoped-selectors-demo',
    'app.components.global-selectors-demo',
    'app.components.class-composition-demo',
    'app.components.composition-overrides-demo',
    'app.components.scoped-animations-demo'
  ])
  .directive('app', () => {
    return {
      restrict: 'E',
      controller: AppController,
      controllerAs: 'app',
      bindToController: true,
      template: `
        <div class="${styles.app}">
          <logo></logo>

          <h2>Scoped Selectors</h2>
          <scoped-selectors-demo></scoped-selectors-demo>

          <h2>Global Selectors</h2>
          <global-selectors-demo></global-selectors-demo>

          <h2>Class Composition</h2>
          <class-composition-demo></class-composition-demo>

          <h2>Composition Overrides</h2>
          <composition-overrides-demo></composition-overrides-demo>

          <h2>Scoped Animations</h2>
          <scoped-animations-demo></scoped-animations-demo>
        </div>
      `
    };
  });

angular.element(document).ready( () => {
  angular.bootstrap(document, ['app']);
});
