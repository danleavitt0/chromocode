/**
 * Modules
 */

var express = require('express')
var compression = require('compression')
var http = require('http')

/**
 * Expose compositor.
 */

var app = module.exports = express()

// compress
app.use(compression())

// config
app.set('port', process.env.PORT || 3000)

// mount

app.use('/static', express.static(__dirname + '/build'))

app.use(require('./views'))

// start
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
})
