app.controller('jobController', function($scope, $location) {

    $scope.go = function(marker) {
      $location.path(marker);
    }

    $scope.deleteJob = function(job) {
      console.log("hi");
      var index = $scope.jobs.indexOf(job);
      $scope.jobs.splice(index, 1);
    };

    $scope.check = function() {
      console.log("hello");
    };

    $scope.jobs = [{status: "cold", company:"DeVita", companyURL: "www.devita.com", industry:"Healthcare", location:"Denver", position:"Jr Developer", contact: "Juan Ramirez", notes: "This is a perfect fit!"},{status: "interviewing", company:"ESPN", industry:"Sports", location:"San Francisco", position:"Full Stack Dev", contact: "Mary Ann Brown", notes: "Waiting to hear back"},{status: "scheduled", company:"Google", industry:"Technology", location:"Boulder", position:"Front End Web Developer", contact: "Julie Cooper", notes: "Waiting to hear back"}];


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
