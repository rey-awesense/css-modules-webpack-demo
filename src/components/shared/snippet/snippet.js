'use strict';

var styles = require('./snippet.css');

angular
  .module('app.components.shared.snippet', [])
  .directive('snippet', () => {
    return {
      restrict: 'E',
      controller: function () {},
      controllerAs: 'snippet',
      bindToController: true,
      transclude: true,
      template: `
        <div class="${styles.root}">
          <div class="${styles.output}">
            <div class="${styles.outputTitle}">Output</div>
            <div class="${styles.outputContent}">
              <ng-transclude></ng-transclude>
            </div>
          </div>
          <div class="${styles.file}" ng-repeat="file in snippet.files">
            <div class="${styles.fileName}">{{file.name}}</div>
            <pre class="${styles.pre}">{{file.source}}</pre>
          </div>
        </div>
      `,
      scope: {
        files: '='
      }
    }
  });
