angular.
  module('ngAssignment').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<dashboard-component></dashboard-component>'
        }).
        otherwise('/');
    }
  ]);