'use strict';

/**
 * @ngdoc function
 * @name pfswebApp.controller:NavbarController
 * @description
 * # NavbarController
 * Controller of the pfswebApp
 */
angular.module('pfswebApp')
  .controller('NavbarController', function ($state) {

    var vm = this;

    vm.isNavbarCollapsed = true;
    vm.$state = $state;

    vm.toggleNavbar = function () {
      vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
    };

    vm.collapseNavbar = function () {
      vm.isNavbarCollapsed = true;
    };

  });
