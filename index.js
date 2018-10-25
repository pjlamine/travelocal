var express = require('express'),
  path = require('path');
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  user = require('./api/models/user'), //created model loading here
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb');


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./api/routes/route'); //importing route
  routes(app); //register the route



app.listen(port);


console.log('Travelocal RESTful API server started on: ' + port);
