app.controller('jobController', function($scope, $location, jobFactory) {
    $scope.go = function(marker) {
      $location.path(marker);
    };

///////////////////////////
  $scope.edit = false;
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

  // $scope.editMovie = function(id) {
  //   jobFactory.put('/company/' + id, $scope.newJob)
  //     .then(function(response){
  //       $scope.newJob.companyName = "";
  //       $scope.newJob.positionTitle = "";
  //       $scope.newJob.location = "";
  //       /////ADD ALL SCOPES HERE TO CLEAR
  //       $scope.edit = false;
  //       getCompanies('/companies');
  //   });
  // };

  // $scope.getCompany = function(id) {
  //   jobFactory.getSingle('/company/' + id)
  //     .then(function(response){
  //       $scope.jobs = response.data;
  //       console.log(response.data);
  //     });
  //   $scope.edit = true;
  // };


});

