'use strict';

/**
 * @ngdoc function
 * @name pfswebApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the pfswebApp
 */
angular.module('pfswebApp')
  .controller('ContactCtrl', function () {
    var vm = this;

    vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBtakm4cEJbXhAde2tX4U0yKJTjMOG5Zp0';
    vm.latitude = 51.046876;
    vm.longitude = 13.774954;
    vm.center = JSON.stringify([vm.latitude, vm.longitude]);

  });
