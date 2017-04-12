'use strict';

angular.module('pfswebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('home', {
      parent: 'app',
      url: '/',
      views: {
        'content@': {
          templateUrl: 'views/home.html'
        }
      },
      onEnter: [function () {
        window.scrollTo(0, 0);
      }]
    });
  });
