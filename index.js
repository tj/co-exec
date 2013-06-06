
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

/**
 * Execute `cmd`.
 */

module.exports = function(cmd){
  return function(done){
    exec(cmd, function(err, stdout, stderr){
      done(err, stdout);
    });
  }
};
