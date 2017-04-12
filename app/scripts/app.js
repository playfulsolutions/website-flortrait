'use strict';

/**
 * @ngdoc overview
 * @name pfswebApp
 * @description
 * # pfswebApp
 *
 * Main module of the application.
 */
angular
  .module('pfswebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'angular.backtop'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({enabled: true, requireBase: true});

    $stateProvider.state('app', {
      abstract: true,
      views: {
        'navbar@': {
          templateUrl: 'views/navbar.html',
          controller: 'NavbarController',
          controllerAs: 'vm'
        }
      }
    });
  });
