'use strict';

/**
 * @ngdoc directive
 * @name pfswebApp.directive:stickySubnav
 * @description
 * # stickySubnav
 */
angular.module('pfswebApp')
  .directive('stickySubnav', function ($window) {
    return {

      restrict: 'A',

      link: function postLink(scope) {
        angular.element($window).bind('scroll', function () {
          if (this.pageYOffset >= 50) {
            scope.style = {
              position: 'fixed',
              width: '100%',
              'z-index': 10
            };
          } else {
            scope.style = {
              position: 'relative',
              'z-index': 1020
            };
          }
          scope.$apply();
        });
      }
    };
  });
