var appRoutes = angular.module('routes', ['ngRoute']);

appRoutes.config(function($routeProvider){
console.log("routes");
$routeProvider
  .when('/', {
    templateUrl: '../pages/table.html',
    controller: 'myController'
  })
  .when('/add', {
    templateUrl: '../pages/addPost.html',
    controller: 'myController'
  });

});
