// Some basic setup
var express = require('express');
var app = module.exports = express();

//var routes = require('./routes');

//var moment = require('moment');
//moment().format('YYYY MM DD');
//var moment = module.exports = moment();
var passport = require('passport');
var flash    = require('connect-flash');

//var morgan       = require('morgan');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');



// Register all schemas (and their api routes)
require("./libs/autoREST").registerSchemas({
  app: app,
  db: "wages_database",
  schemas: ["Article", "Category", "user"]
});

// uncomment this line
require('./config/passport')(passport); // pass passport for configuration

//app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  // set up our express application
  //app.use(morgan('dev')); // log every request to the console
  app.use(morgan('dev')); // log every request to the console
  app.use(cookieParser()); // read cookies (needed for auth)
  app.use(bodyParser.json()); // get information from html forms
  app.use(bodyParser.urlencoded({ extended: true }));

  //app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));

  // required for passport
  // required for passport
  app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages st
  
  //app.use(app.router);
//});

// routes ======================================================================
require('./routes/siteroutes.js')(app); // load our routes and pass in our app and fully configured passport
require('./routes')(app, passport); // load our routes and pass in our app and fully configured passport
       
// Main (non-ajax/REST routes)
//app.get('/', routes.index); // startpoint for normal users
//app.get('/admin', routes.adminIndex); // startpoint for admin users

//app.get('/partials/site/:name', routes.site);
//app.get('/partials/admin/templates/:name',routes.admin);
//app.get('/partials/admin/templates/archive/:name',routes.adminArchive);
//app.get('/partials/admin/templates/articles/:name',routes.adminArticles);
//app.get('/partials/admin/templates/categories/:name',routes.adminCategories);
//app.get('/partials/admin/templates/users/:name',routes.adminUsers);

// Take care of routes not defined
// (important that this comes last 
//  - after all routes have been defined)
//app.get('*', routes.index);

// Start the server on port 3000
app.listen(3000, function(){
  // Log some info about the server to the console
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

//var now = moment();
//console.log("Time NOW:", now);