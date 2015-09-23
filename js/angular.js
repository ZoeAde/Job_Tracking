// sample angular code

var app = angular.module('myApp', ['ngRoute']);


app.controller('jobController', function($scope, $location) {

    $scope.go = function(marker) {
      $location.path(marker);
    }

    $scope.deleteJob = function(job) {
      console.log("hi");
      var index = $scope.jobs.indexOf(job);
      $scope.jobs.splice(index, 1);
    };

    $scope.jobs = [{status: "cold", company:"DeVita", companyURL: "www.devita.com", industry:"Healthcare", location:"Denver", position:"Jr JS Dev", contact: "none", notes: "This is a perfect fit!"},{status: "interviewing", company:"ESPN", industry:"Sports", location:"SF", position:"Full Stack Dev", contact: "Mary Ann", notes: "Waiting to hear back"},{status: "scheduled", company:"ESPN", industry:"Sports", location:"SF", position:"Full Stack Dev", contact: "Mary Ann", notes: "Waiting to hear back"},{status: "offer", company:"ESPN", industry:"Sports", location:"SF", position:"Full Stack Dev", contact: "Mary Ann", notes: "Waiting to hear back"},{status: "denied", company:"ESPN", industry:"Sports", location:"SF", position:"Full Stack Dev", contact: "Mary Ann", notes: "Waiting to hear back"}, {status: "applied", company:"ESPN", industry:"Sports", location:"SF", position:"Full Stack Dev", contact: "Mary Ann", notes: "Waiting to hear back"}];


$scope.addNewJob = function() {
  $scope.newJob = {
    status: $scope.status,
    company: $scope.company,
    companyURL: $scope.companyURL,
    industry: $scope.industry,
    location: $scope.location,
    position: $scope.position,
    contact: $scope.contact,
    notes: $scope.notes
  };
  $scope.jobs.push($scope.newJob);
};

});
