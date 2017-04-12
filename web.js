var compression = require('compression');
var helmet = require('helmet');
var express = require('express');
var app = express();

app.use(helmet());
app.use(compression());
app.use('/bower_components', express.static('' + __dirname + '/dist/bower_components', {etag: true, maxAge: '1y'}));
app.use('/images', express.static('' + __dirname + '/dist/images', {etag: true, maxAge: '1y'}));
app.use('/scripts', express.static('' + __dirname + '/dist/scripts', {etag: true, maxAge: '1y'}));
app.use('/styles', express.static('' + __dirname + '/dist/styles', {etag: true, maxAge: '1y'}));

app.all('/*', function (req, res) {
  res.sendFile('' + __dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
