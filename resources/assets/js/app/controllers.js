var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
      }).
      when('/sink', {
        templateUrl: 'pages/kitchen-sink.html'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
