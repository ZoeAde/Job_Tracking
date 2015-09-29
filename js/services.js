app.module('factories', [])
  .factory('jobFactory', [function() {
    var o = {
      jobs:[[{status: "cold", company:"DeVita", companyURL: "www.devita.com", industry:"Healthcare", location:"Denver", position:"Jr Developer", contact: "Juan Ramirez", notes: "This is a perfect fit!"},{status: "interviewing", company:"ESPN", industry:"Sports", location:"San Francisco", position:"Full Stack Dev", contact: "Mary Ann Brown", notes: "Waiting to hear back"},{status: "scheduled", company:"Google", industry:"Technology", location:"Boulder", position:"Front End Web Developer", contact: "Julie Cooper", notes: "Waiting to hear back"}]]
    };
    return o;
  }]);




    // $scope.jobs = [{status: "cold", company:"DeVita", companyURL: "www.devita.com", industry:"Healthcare", location:"Denver", position:"Jr Developer", contact: "Juan Ramirez", notes: "This is a perfect fit!"},{status: "interviewing", company:"ESPN", industry:"Sports", location:"San Francisco", position:"Full Stack Dev", contact: "Mary Ann Brown", notes: "Waiting to hear back"},{status: "scheduled", company:"Google", industry:"Technology", location:"Boulder", position:"Front End Web Developer", contact: "Julie Cooper", notes: "Waiting to hear back"}];


