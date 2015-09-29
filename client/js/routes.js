var appRoutes = angular.module('routes', ['ngRoute']);

appRoutes.config(function($routeProvider){
console.log("routes");
$routeProvider
  .when('/', {
    templateUrl: 'views/table.html',
    controller: 'myController'
  })
  .when('/add', {
    templateUrl: 'views/addPost.html',
    controller: 'myController'
  });

});
