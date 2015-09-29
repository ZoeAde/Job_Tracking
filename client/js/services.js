app.factory('jobFactory', ['$http', function($http){
  var obj = {};

  obj.getAll = function(url) {
    return $http.get(url);
  };
  obj.post = function(url, payload) {
    return $http.post(url, payload);
  };
  obj.delete = function(url, id) {
    return $http.delete(url, id);
  };
  obj.getSingle = function(url, id) {
    return $http.get(url, id);
  };
  obj.put = function(url, id, payload) {
    return $http.put(url, id, payload);
  };
  return obj;
  }]);




    // $scope.jobs = [{status: "cold", company:"DeVita", companyURL: "www.devita.com", industry:"Healthcare", location:"Denver", position:"Jr Developer", contact: "Juan Ramirez", notes: "This is a perfect fit!"},{status: "interviewing", company:"ESPN", industry:"Sports", location:"San Francisco", position:"Full Stack Dev", contact: "Mary Ann Brown", notes: "Waiting to hear back"},{status: "scheduled", company:"Google", industry:"Technology", location:"Boulder", position:"Front End Web Developer", contact: "Julie Cooper", notes: "Waiting to hear back"}];


