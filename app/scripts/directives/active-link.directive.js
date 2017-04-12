'use strict';

/**
 * @ngdoc directive
 * @name pfswebApp.directive:activeLink
 * @description
 * # activeLink
 */
angular.module('pfswebApp')
  .directive('activeLink', function () {
    return {

      restrict: 'A',

      link: function postLink(scope, element, attrs) {
        var clazz = attrs.activeLink;
        var path = attrs.href;
        path = path.substring(1); //hack because path does bot return including hashbang
        scope.location = location;
        scope.$watch('location.path()', function (newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    };
  });
