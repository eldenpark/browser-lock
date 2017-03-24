var fs = require('fs');
var ejs = require("ejs");
var path = require('path');

/**
 *
 */
function getDestPath(srcPath) {
  var arr = srcPath.split('/');
  var filename = arr[arr.length - 1].slice(0, arr.length - 5) + ".html";
  return path.resolve(srcPath, '..', '..', 'html', filename);
}

/**
 *
 */
function ejs2html(_srcPath, information) {

  if (!_srcPath.includes('.')) {
    console.log("Wrong path. Include extension within the path.")
  }
  var srcPath = __dirname + "/" + _srcPath;
  var destPath = getDestPath(srcPath);

  console.log('src path', srcPath);
  console.log('dest path', destPath);

  fs.readFile(srcPath, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }

    var ejs_string = data,
      template = ejs.compile(ejs_string, {
        filename: srcPath
      }),
      html = template(information);

    fs.writeFile(destPath, html, function(err) {
      if (err) {
        console.log(err);
      }
      console.log(destPath + ' is generated');
    });
  });
}

var arg = process.argv[2];
ejs2html(arg);