app.controller('jobController', ['$scope', '$location', 'factories', function($scope, $location, factories) {

    $scope.go = function(marker) {
      $location.path(marker);
    };

    $scope.deleteJob = function(job) {;
      var index = $scope.jobs.indexOf(job);
      $scope.jobs.splice(index, 1);
    };

    $scope.jobs = factories.jobFactory.jobs;

$scope.addNewJob = function() {
  var newJob = {
    status: $scope.status,
    company: $scope.company,
    companyURL: $scope.companyURL,
    industry: $scope.industry,
    location: $scope.location,
    position: $scope.position,
    contact: $scope.contact,
    notes: $scope.notes
  };
  $scope.jobs.push(newJob);
  //clear all input values here:
};


}]);
