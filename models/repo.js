(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    $.when(
     $.get('/github/users/codefellows-seattle-301d14/repos', function(data) {
       reposObj.allRepos = data;
     }),
     $.get('/github/users/Casey0Kane/followers', function(data) {
       reposObj.followers = data;
     })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
