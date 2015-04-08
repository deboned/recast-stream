# recast-stream
Pipe recast through streams.

```
var recastStream = require('recast-stream');

recastStream.src(['./node_modules/backbone.nativeview/backbone.nativeview.js'])
  .pipe(recastStream.parse())
  // .pipe(recastDeamdify()) //not yet compatible
  .pipe(recastStream.print())
  .pipe(recastStream.dest('./output'))
  ;
```