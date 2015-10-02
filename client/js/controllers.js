app.controller('jobController', function($scope, $location, $window, jobFactory) {
    $scope.go = function(marker) {
      $location.path(marker);
    };

    $scope.redirect = function(url) {
      $window.open('http://' + url);
    };
///////////////////////////
  getCompanies = function(url) {
    jobFactory.getAll(url)
      .then(function(response){
        $scope.jobs = response.data;
      });
  };
  getCompanies('/companies');

  $scope.postCompany = function() {
    jobFactory.post('/companies', $scope.newJob)
      .then(function(response){
        $scope.jobs.push(response.data);
      });
  };

  $scope.deleteCompany = function(id) {
    jobFactory.delete('/company/' + id)
      .then(function(response) {
        getCompanies('/companies');
      });
  };

  $scope.editCompany = function(id) {
    jobFactory.put('/company/' + id, $scope.newJob)
      .then(function(response){
        /////ADD ALL SCOPES HERE TO CLEAR
    });
  };

  // $scope.getCompany = function(id) {
  //   jobFactory.getSingle('/company/' + id)
  //     .then(function(response){
  //       $scope.jobs = response.data;
  //       console.log(response.data);
  //     });
  //   $scope.edit = true;
  // };


});

