
# co-exec

  Node core `exec()` wrapped to return a thunk for [co](https://github.com/visionmedia/co).

## Installation

```
$ npm install co-exec
```

## Example

  Do some stuff with git:

```js
var co = require('co');
var exec = require('co-exec');

co(function *(){
  var commit = yield exec('git rev-parse HEAD');
  var commits = yield exec('git rev-list master | wc -l');
  console.log('the latest commit is %s, with a total of %s', commit.slice(0, 5), commits.trim());
});
```

## License

  MIT

