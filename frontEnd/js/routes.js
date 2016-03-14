angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/page2', {
        templateUrl: 'views/page2.html'
      })
      .when('/page3', {
        templateUrl: 'views/page3.html'
      })
      .when('/page4', {
        templateUrl: 'views/page4.html'
      });

  });
