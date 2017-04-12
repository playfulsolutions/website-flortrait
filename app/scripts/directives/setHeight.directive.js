'use strict';

angular
  .module('pfswebApp')
  .directive('setHeight', function ($window) {

    return {

      scope: {
        offset: '='
      },

      link: function (scope, element) {
        var offsetPixel = scope.offset && $window.innerHeight >= scope.offset ? scope.offset : 0;
        element.css('min-height', $window.innerHeight - offsetPixel + 'px');
      }
    };

  });
