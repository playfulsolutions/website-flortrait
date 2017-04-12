'use strict';

angular.module('pfswebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('impressum', {
      parent: 'app',
      url: '/impressum',
      views: {
        'content@': {
          templateUrl: 'views/impressum.html'
        }
      },
      onEnter: [function () {
        window.scrollTo(0, 0);
      }]
    });
  });
