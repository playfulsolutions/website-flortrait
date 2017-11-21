'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('pfswebApp'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have correct latitude in the scope', function () {
    expect(ContactCtrl.latitude).toBe(51.055163);
  });
});
