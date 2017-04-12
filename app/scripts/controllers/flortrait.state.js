'use strict';

angular.module('pfswebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('flortrait', {
      parent: 'app',
      url: '/flortrait',
      views: {
        'content@': {
          templateUrl: 'views/flortrait.html',
          controller: 'FlortraitController',
          controllerAs: 'vm'
        },
        'subnavigation': {
          templateUrl: 'views/flortrait.mobile.subnavigation.html',
          controller: 'FlortraitController',
          controllerAs: 'vm'
        }
      },
      onEnter: [function () {
        window.scrollTo(0, 0);
      }]
    });
  });
