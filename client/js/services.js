app.factory('jobFactory', ['$http', function($http){
  var obj = {};

  obj.getAll = function(url) {
    return $http.get(url);
  };
  obj.post = function(url, payload) {
    console.log('payload', payload);
    console.log('url', url)
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
