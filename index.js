/**
 * Created by Paul on 4/8/2015.
 */

var fs = require('vinyl-fs');
var recast = require('recast');
var through = require('through2');

var parse = function(opt) {

  function parser(file, encoding, callback) {

    var source = file.contents.toString();
    var ast = recast.parse(source);

    callback(null, {
      ast: ast,
      file: file
    });
  }

  return through.obj(parser);
}


function Streamer() { }

Streamer.prototype.src = function(filesArray) {
  return fs.src(['./node_modules/backbone.nativeview/backbone.nativeview.js'])
    .pipe(parse());
};

Streamer.prototype.print = function() {
  function printer(data, encoding, callback) {

    var file = data.file;
    file.contents = new Buffer(recast.print(data.ast, { quote: 'single' }).code);

    callback(null, file);
  }

  return through.obj(printer);
}

Streamer.prototype.dest= fs.dest;

var inst = new Streamer();

module.exports = inst;
