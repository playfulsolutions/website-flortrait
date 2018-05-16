'use strict';

angular.module('pfswebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('datenschutz', {
      parent: 'app',
      url: '/datenschutz',
      views: {
        'content@': {
          templateUrl: 'views/datenschutz.html'
        }
      },
      onEnter: [function () {
        window.scrollTo(0, 0);
      }]
    });
  });
