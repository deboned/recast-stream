# recast-stream
Pipe recast through streams.

```
var recastStream = require('recast-stream');

recastStream.src(['./path/to/file.js'])
  .pipe(recastStream.parse())
  // .pipe(recastDeamdify()) //not yet compatible
  .pipe(recastStream.print())
  .pipe(recastStream.dest('./output'))
  ;
```
