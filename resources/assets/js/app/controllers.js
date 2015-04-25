var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
      }).
      when('/projects', {
        templateUrl: 'pages/projects.html',
        controller: 'ProjectController'
      }).
      when('/projects/:slug', {
        templateUrl: 'pages/project.html',
        controller: 'ProjectController'
      }).
      when('/about', {
        templateUrl: 'pages/about.html'
      }).
      when('/contact', {
        templateUrl: 'pages/contact.html'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);


myApp.controller('HomeController', [ '$scope', '$http',

  function ($scope, $http) {
    $http.get('/data/skills.json').success(function(skills) {
      $scope.skills = skills;
    });
    $http.get('/data/resume.json').success(function(resumes) {
      $scope.resumes = resumes;
    });
    $http.get('/data/projects.json').success(function(projects) {
      $scope.projects = projects;
    });
  }

]);

myApp.controller('ProjectController', [ '$scope', '$routeParams',

  function ($scope, $routeParams, slug) {
    $scope.params = $routeParams;
  }

]);