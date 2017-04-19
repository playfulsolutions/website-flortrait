'use strict';

angular.module('pfswebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('contact', {
      parent: 'app',
      url: '/contact',
      views: {
        'content@': {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'vm'
        }
      },
      onEnter: [function () {
        window.scrollTo(0, 0);
      }]
    });
  });
