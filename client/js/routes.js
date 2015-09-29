var appRoutes = angular.module('routes', ['ngRoute']);

appRoutes.config(function($routeProvider){

$routeProvider
  .when('/', {
    templateUrl: 'views/table.html',
    controller: 'jobController'
  })
  .when('/add', {
    templateUrl: 'views/addPost.html',
    controller: 'jobController'
  });

});
