
var co = require('co');
var exec = require('./');

co(function *(){
  var commit = yield exec('git rev-parse HEAD');
  var commits = yield exec('git rev-list master | wc -l');
  console.log('the latest commit is %s, with a total of %s', commit.slice(0, 5), commits.trim());
});
