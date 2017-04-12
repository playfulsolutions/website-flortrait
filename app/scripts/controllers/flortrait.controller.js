'use strict';

/**
 * @ngdoc function
 * @name pfswebApp.controller:FlortraitController
 * @description
 * # FlortraitController
 * Controller of the pfswebApp
 */
angular.module('pfswebApp')
  .controller('FlortraitController', function ($scope, $timeout, AnchorScrollService) {

    var vm = this;

    $scope.isMDandUp = window.matchMedia('(min-width: 992px)').matches;

    vm.moveToSection = function (sectionId, offsetY) {
      $timeout(function () {
        if (offsetY) {
          AnchorScrollService.scrollTo(sectionId, offsetY);
        } else {
          AnchorScrollService.scrollTo(sectionId);
        }
      }, 300);
    };

  });
